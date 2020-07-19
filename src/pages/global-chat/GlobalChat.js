import React, { useEffect, useRef, useState } from 'react'
import { useFetch } from 'hooks/fetch'
import { TextInput } from 'components/TextInput'
import { ChatMessage } from 'components/ChatMessage'
import { GlobalChatWrapper, StyledTab, StyledContainer, ChatContent } from './styled'
import PropTypes from 'prop-types'
import Api from 'services'
import io from 'socket.io-client'

export const GlobalChat = () => {
  const lastRef = useRef(null)
  const [messages] = useFetch(Api.getChats)
  const [globalChat, setGlobalChat] = useState([])

  useEffect(() => setGlobalChat(messages), [messages])
  useEffect(() => scrollToBottom(), [globalChat])
  useEffect(() => {
    (() => {
      window.socket = io()
      window.socket.on('chat-global', (username, message) => {
        const newMessage = {
          username,
          message,
          time: new Date().getTime() / 1000
        }
        setGlobalChat([...globalChat, newMessage])
      })

      window.socket.on('pong', (ms) => {
        window.latency = ms
      })
    })()
    return () => {
      window.socket.disconnect()
      window.socket.close()
    }
  }, [globalChat])

  const scrollToBottom = () => {
    lastRef.current.scrollIntoView()
  }

  const submitMessage = text => {
    window.socket.emit('chat-global', text)
  }

  return (
    <GlobalChatWrapper>
      <ChatTab title='Chat Box' />

      <StyledContainer>
        <ChatContent>
          {globalChat && globalChat.map((message, i) => (
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
