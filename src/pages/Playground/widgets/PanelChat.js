import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ChatMessage } from 'shared/components/ChatMessage'
import { TextInput } from 'shared/components/TextInput'
import styled from 'styled-components/macro'
import Api from 'services'

export const PanelChat = () => {
  const lastRef = useRef(null)
  const { slug } = useParams()
  const [roomChat, setRoomChat] = useState([])

  useEffect(() => scrollToBottom(), [roomChat])
  useEffect(() => {
    (async () => {
      const messages = await Api.getRoomChat(slug)
      setRoomChat(messages)
    })()
  }, [slug])

  const scrollToBottom = () => {
    lastRef.current.scrollIntoView()
  }

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
        <div ref={lastRef} />

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
