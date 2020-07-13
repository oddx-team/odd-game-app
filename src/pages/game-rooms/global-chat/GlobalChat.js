import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useFetch } from 'hooks'
import { TextInput } from 'components/TextInput'
import { ChatMessage } from 'components/ChatMessage'
import { GlobalChatWrapper, StyledTab, StyledContainer, ChatContent } from './styled'

import Api from 'services'

export const GlobalChat = () => {
  const lastRef = useRef(null)
  const [messages] = useFetch(Api.getChats)
  const [globalChat, setGlobalChat] = useState([])

  useEffect(() => setGlobalChat(messages), [messages])
  useEffect(() => scrollToBottom(), [globalChat])
  useEffect(() => {
    initSocket()

    return () => {
      window.socket.disconnect()
      window.socket.close()
    }
  }, [])

  const initSocket = () => {
    window.socket = global.config.socket
    window.socket.on('global chat', (username, message) => {
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
