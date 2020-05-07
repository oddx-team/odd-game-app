import React, { useState } from 'react';
import styled from 'styled-components';
import OddChatMessage from 'components/oddx/OddChatMessage';
import OddTextInput from 'components/oddx/OddTextInput';

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

const StyledContainer = styled.div`
  width: 100%;
  height: 2.5rem;
`;

const ChatContent = styled.div`
  border-top: 0.013rem solid #ddd;
  flex: 1;
  overflow-y: auto;
  height: 1.45rem;
`;

const StyledInput = styled.div`
  display: flex;
  color: #000;
  font-size: 0.18rem;
  width: 4.5rem;
  height: 0.4rem;
  border-radius: 0.3rem;
  background: rgba($color: #000, $alpha: 0.05);
  margin: 0.1rem;
`;

export default PanelChat;
