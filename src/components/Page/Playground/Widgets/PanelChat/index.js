import React, { useState } from 'react'
import OddChatMessage from 'components/UI/OddChatMessage'
import OddTextInput from 'components/UI/OddTextInput'
import { StyledContainer, ChatContent } from './styled'

const PanelChat = () => {
  const [messages] = useState(new Array(6).fill(null))

  return (
    <StyledContainer>
      <ChatContent>
        {messages.map((_, i) => (
          <div key={i}>
            <OddChatMessage username='admin' message='Hello world!' time={Date.now()} small />
          </div>
        ))}
      </ChatContent>
      <OddTextInput placeholder='Type a message' small />
    </StyledContainer>
  )
}

export default PanelChat
