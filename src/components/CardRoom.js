import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'stylesheets/CardRoom.scss';

const CardRoom = ({ onJoin, onSpectate }) => {
  return (
    <Route
      render={({ history }) => (
        <div className="card-room wrapper block">
          <div className="card-room-inner">
            <div className="title">Name room</div>
            <div className="host">
              <strong>Host: </strong>
              <span>Admin</span>
            </div>
            <div className="room">
              <strong>Room: </strong>
              <span>8/10</span>
            </div>
            <div className="spectator">
              <strong>Spectators: </strong>
              <span>15</span>
            </div>
            <div className="spectator">
              <strong>Status: </strong>
              <span>In Progress</span>
            </div>
          </div>

          <button className="block accent btn-join" onClick={() => onJoin(history)}>
            Join
          </button>
          <button className="block blue btn-spectate" onClick={() => onSpectate(history)}>
            Spectate
          </button>
        </div>
      )}
    />
  );
};

CardRoom.propTypes = {
  onJoin: PropTypes.func.isRequired,
  onSpectate: PropTypes.func.isRequired,
};

export default CardRoom;
