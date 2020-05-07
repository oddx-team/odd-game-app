import React, { useState } from 'react';
import OddChatMessage from 'components/oddx/OddChatMessage';
import OddTextInput from 'components/oddx/OddTextInput';
import { StyledContainer, ChatContent, StyledInput } from 'stylesheets/panels/PanelChat.style';

const PanelChat = () => {
  const [messages] = useState(new Array(6).fill(null));

  return (
    <StyledContainer>
      <ChatContent>
        {messages.map((_, i) => (
          <div key={i}>
            <OddChatMessage user="admin" message="Hello world!" time={Date.now()} small />
          </div>
        ))}
      </ChatContent>

      <StyledInput>
        <OddTextInput placeholder="Type a message" />
      </StyledInput>
    </StyledContainer>
  );
};

export default PanelChat;
