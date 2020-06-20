import React, { useState } from 'react'
import { ChatMessage } from 'components/ChatMessage'
import { TextInput } from 'components/TextInput'
import styled from 'styled-components/macro'

export const PanelChat = () => {
  const [messages] = useState(new Array(6).fill(null))

  return (
    <StyledContainer>
      <ChatContent>
        {messages.map((_, i) => (
          <div key={i}>
            <ChatMessage username='admin' message='Hello world!' time={Date.now()} small />
          </div>
        ))}
      </ChatContent>
      <TextInput placeholder='Type a message' small />
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
