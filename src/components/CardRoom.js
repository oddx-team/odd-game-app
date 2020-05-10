import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Title, StyledCardRoom, CardRoomInner, ButtonJoin, ButtonSpectate } from 'stylesheets/CardRoom.style.js';

const Text = ({ title, value }) => {
  const textStyle = {
    marginBottom: '0.08rem',
  };
  return (
    <div style={textStyle}>
      <strong>{title}: </strong>
      <span>{value}</span>
    </div>
  );
};

const ROOM_STATUS = {
  0: 'In process',
  1: 'Open',
  2: 'Busy',
};

const CardRoom = ({ onJoin, onSpectate, roomInfo: { name, host, maxPlayer, currentPlayer, spectator, statusId } }) => {
  return (
    <Route
      render={({ history }) => (
        <StyledCardRoom className="wrapper block">
          <CardRoomInner>
            <Title> {name} </Title>
            <Text title="Host" value={host.name} />
            <Text title="Room" value={`${currentPlayer} / ${maxPlayer} `} />
            <Text title="Spectators" value={`${spectator}`} />
            <Text title="Status" value={ROOM_STATUS[statusId]} />
          </CardRoomInner>

          <ButtonJoin className="block accent" onClick={() => onJoin(history)}>
            Join
          </ButtonJoin>
          <ButtonSpectate className="block blue" onClick={() => onSpectate(history)}>
            Spectate
          </ButtonSpectate>
        </StyledCardRoom>
      )}
    />
  );
};

CardRoom.propTypes = {
  onJoin: PropTypes.func.isRequired,
  onSpectate: PropTypes.func.isRequired,
  roomInfo: PropTypes.object,
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CardRoom;
