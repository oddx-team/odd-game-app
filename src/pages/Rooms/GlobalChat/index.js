import React, { useEffect, useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { GameContext } from 'contexts/GameContext'
import { TextInput } from 'components/TextInput'
import { ChatMessage } from 'components/ChatMessage'
import { GlobalChatWrapper, StyledTab, StyledContainer, ChatContent } from './styled'

import Api from 'services'
import io from 'socket.io-client'

const GlobalChat = () => {
  const { state, dispatch } = useContext(GameContext)
  const { globalChat } = state
  const lastRef = useRef(null)

  useEffect(() => scrollToBottom(), [globalChat])

  useEffect(() => {
    fetchGlobalChats()
    initSocket()

    return () => {
      window.socket.disconnect()
      window.socket.close()
    }
  }, [])

  const fetchGlobalChats = async () => {
    if (!globalChat.length) {
      const messages = await Api.getChats()
      console.log(messages)
      dispatch({
        type: 'UPDATE_GLOBAL_CHAT',
        messages
      })
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
      dispatch({
        type: 'UPDATE_GLOBAL_CHAT',
        messages: [newMessage]
      })
    })
  }

  const scrollToBottom = () => {
    lastRef.current.scrollIntoView()
  }

  const submitMessage = text => {
    window.socket.emit('global chat', text)
  }

  return (
    <GlobalChatWrapper>
      <ChatTab title='Chat Box' />

      <StyledContainer>
        <ChatContent>
          {globalChat.map((message, i) => (
            <div key={i}>
              <ChatMessage {...message} />
            </div>
          ))}
          <div ref={lastRef} />
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
