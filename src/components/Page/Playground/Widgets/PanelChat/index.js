import React, { useState } from 'react'
import OddChatMessage from 'components/Oddx/OddChatMessage'
import OddTextInput from 'components/Oddx/OddTextInput'
import { StyledContainer, ChatContent } from './styled'

const PanelChat = () => {
  const [messages] = useState(new Array(6).fill(null))

  return (
    <StyledContainer>
      <ChatContent>
        {messages.map((_, i) => (
          <div key={i}>
            <OddChatMessage user='admin' message='Hello world!' time={Date.now()} small />
          </div>
        ))}
      </ChatContent>
      <OddTextInput placeholder='Type a message' small />
    </StyledContainer>
  )
}

export default PanelChat
