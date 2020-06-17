import React, { useState } from 'react'
import { ChatMessage } from 'components/ChatMessage'
import { TextInput } from 'components/TextInput'
import { StyledContainer, ChatContent } from './styled'

const PanelChat = () => {
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

export default PanelChat
