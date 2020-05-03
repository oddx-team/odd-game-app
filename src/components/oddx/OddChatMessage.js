import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconAvatar from 'cdn/assets/icon-avatar.png';
import { StyledMessage, Avatar, Status, Name, Message, Time } from 'stylesheets/oddx/OddChatMessage.style.js';

const OddChatMessage = ({ user, message, time, online }) => {
  const onlineStatus = classNames({ online });

  const date = new Date(time * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();

  return (
    <StyledMessage>
      <Avatar src={IconAvatar} />
      <Status className={onlineStatus} />
      <Name>{user}</Name>
      <Message>{message}</Message>
      <Time>
        {hours}:{minutes}
      </Time>
    </StyledMessage>
  );
};

OddChatMessage.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.number,
  online: PropTypes.bool,
};

export default OddChatMessage;
