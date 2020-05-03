import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Title,
  StyledCardRoom,
  CardRoomInner,
  ButtonJoin,
  ButtonSpectate,
  Action,
} from 'stylesheets/CardRoom.style.js';

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

const CardRoom = ({ onJoin, onSpectate }) => {
  return (
    <Route
      render={({ history }) => (
        <StyledCardRoom className="wrapper block">
          <CardRoomInner>
            <Title>Name Room</Title>
            <Text title="Host" value="Admin" />
            <Text title="Room" value="8/10" />
            <Text title="Spectators" value="15" />
            <Text title="Status" value="In Progress" />
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
};

export default CardRoom;
