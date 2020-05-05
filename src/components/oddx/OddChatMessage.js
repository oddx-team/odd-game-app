import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import utils from 'utils';
import { StyledMessage, Avatar, Status, Name, Message, Time } from 'stylesheets/oddx/OddChatMessage.style.js';
import { GameContext } from 'contexts/GameContext';

const OddChatMessage = ({ user, message, time }) => {
  const { hours, mins } = utils.parseTime(time);
  const { state } = useContext(GameContext);
  const onlineStatus = classNames({ online: state.online });

  return (
    <StyledMessage>
      <Avatar src={`https://www.tinygraphs.com/spaceinvaders/${user}?size=60`} />
      <Status className={onlineStatus} />
      <Name>{user}</Name>
      <Message>{message}</Message>
      <Time>
        {hours}:{mins}
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
