import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconAvatar from 'cdn/assets/icon-avatar.png';
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

OddChatMessage.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  online: PropTypes.string,
};

export default OddChatMessage;
