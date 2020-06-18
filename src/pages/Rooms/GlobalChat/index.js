import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useGame } from 'hooks'
import { TextInput } from 'components/TextInput'
import { ChatMessage } from 'components/ChatMessage'
import { GlobalChatWrapper, StyledTab, StyledContainer, ChatContent } from './styled'

import Api from 'services'
import io from 'socket.io-client'

const GlobalChat = () => {
  const HookGame = useGame()
  const LastRef = useRef(null)

  useEffect(() => scrollToBottom(), [HookGame.globalChat])
  useEffect(() => {
    fetchGlobalChats()
    initSocket()

    return () => {
      window.socket.disconnect()
      window.socket.close()
    }
  }, [])

  const fetchGlobalChats = async () => {
    if (!HookGame.globalChat.length) {
      const messages = await Api.getChats()
      HookGame.updateGlobalChat(messages)
    }
  }

  const initSocket = () => {
    window.socket = io()
    window.socket.on('global chat', (username, message) => {
      const newMessage = {
        username,
        message,
        time: new Date().getTime() / 1000
      }
      HookGame.updateGlobalChat([newMessage])
    })

    window.socket.on('pong', (ms) => {
      window.latency = ms
    })
  }

  const scrollToBottom = () => {
    LastRef.current.scrollIntoView()
  }

  const submitMessage = text => {
    window.socket.emit('global chat', text)
  }

  return (
    <GlobalChatWrapper>
      <ChatTab title='Chat Box' />

      <StyledContainer>
        <ChatContent>
          {HookGame.globalChat.map((message, i) => (
            <div key={i}>
              <ChatMessage {...message} />
            </div>
          ))}
          <div ref={LastRef} />
        </ChatContent>

        <TextInput placeholder='Type a message' onSubmit={submitMessage} />
      </StyledContainer>
    </GlobalChatWrapper>
  )
}

const ChatTab = ({ title }) => {
  return (
    <StyledTab>
      <i />
      <span>{title}</span>
    </StyledTab>
  )
}

ChatTab.propTypes = {
  title: PropTypes.string.isRequired
}

export default GlobalChat
