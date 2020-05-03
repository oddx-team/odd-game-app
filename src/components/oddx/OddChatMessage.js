import React from 'react';
import IconAvatar from 'cdn/assets/icon-avatar.png';
import classNames from 'classnames';
import { StyledMessage, Avatar, Status, Name, Message, Time } from 'stylesheets/oddx/OddChatMessage.style.js';

const OddChatMessage = ({ name, message, time, online }) => {
  const onlineStatus = classNames({ online });

  return (
    <StyledMessage>
      <Avatar src={IconAvatar} />
      <Status className={onlineStatus} />
      <Name>{name}</Name>
      <Message>{message}</Message>
      <Time>{time}</Time>
    </StyledMessage>
  );
};

export default OddChatMessage;
