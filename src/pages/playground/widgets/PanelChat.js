import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ChatMessage } from 'components/ChatMessage'
import { TextInput } from 'components/TextInput'
import { SocketContext } from 'contexts/SocketContext'
import styled from 'styled-components/macro'
import Api from 'services'

export const PanelChat = () => {
  const { slug } = useParams()
  const { socket } = useContext(SocketContext)
  const [roomChat, setRoomChat] = useState([])

  useEffect(() => {
    (async () => {
      const messages = await Api.getRoomChat(slug)
      setRoomChat(messages)
    })()
  }, [slug])

  useEffect(() => {
    (() => {
      window.socket = socket
      window.socket.on(slug, (action, username, message) => {
        if (action === 'chat') {
          const newMessage = {
            username,
            message,
            time: new Date().getTime() / 1000
          }
          setRoomChat([...roomChat, newMessage])
        }
      })
    })()
  }, [roomChat, slug])

  const submitMessage = text => {
    window.socket.emit('chat-private', text)
  }

  return (
    <StyledContainer>
      <ChatContent>
        {roomChat && roomChat.map((message, i) => (
          <div key={i}>
            <ChatMessage small {...message} />
          </div>
        ))}
      </ChatContent>
      <TextInput placeholder='Type a message' small onSubmit={submitMessage} />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  height: 1rem;
`

const ChatContent = styled.div`
  border-top: 0.013rem solid #ddd;
  flex: 1;
  overflow-y: auto;
  height: 1.1rem;
`
