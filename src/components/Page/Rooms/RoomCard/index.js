import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Title, StyledCardRoom, CardRoomInner, ButtonJoin, ButtonSpectate } from './styled';

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

const CardRoom = props => {
  const joinRoom = history => {
    history.push('/play');
  };

  const spectateRoom = history => {
    history.push('/play');
  };

  return (
    <Route
      render={({ history }) => (
        <StyledCardRoom className="wrapper block">
          <CardRoomInner>
            <Title>{props.name}</Title>
            <Text title="Host" value={props.host} />
            <Text title="Room" value={`${props.current}/${props.total}`} />
            <Text title="Spectators" value={`${props.viewers}`} />
            <Text title="Status" value="In Progress" />
          </CardRoomInner>

          <ButtonJoin className="block accent" onClick={() => joinRoom(history)}>
            Join
          </ButtonJoin>
          <ButtonSpectate className="block blue" onClick={() => spectateRoom(history)}>
            Spectate
          </ButtonSpectate>
        </StyledCardRoom>
      )}
    />
  );
};

CardRoom.propTypes = {
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  viewers: PropTypes.number.isRequired,
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CardRoom;
