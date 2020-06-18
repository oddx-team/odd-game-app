import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Title, StyledCardRoom, CardRoomInner, ButtonJoin, ButtonSpectate } from './styled'

const Text = ({ title, value }) => {
  const textStyle = {
    marginBottom: '0.08rem'
  }
  return (
    <div style={textStyle}>
      <strong>{title}: </strong>
      <span>{value}</span>
    </div>
  )
}

const RoomCard = props => {
  const joinRoom = (history, roomId) => {
    history.push(`/rooms/${roomId}`)
  }

  const spectateRoom = (history, roomId) => {
    history.push(`/rooms/${roomId}`)
  }

  return (
    <Route
      render={({ history }) => (
        <StyledCardRoom className='wrapper block'>
          <CardRoomInner>
            <Title>{props.name}</Title>
            <Text title='Host' value={props.host} />
            <Text title='Room' value={`${props.current}/10`} />
            <Text title='Spectate' value={`${props.guest}`} />
            <Text title='Status' value={props.status} />
          </CardRoomInner>

          <ButtonJoin className='block accent' onClick={() => joinRoom(history, props._id)}>
            Join
          </ButtonJoin>
          <ButtonSpectate className='block blue' onClick={() => spectateRoom(history, props._id)}>
            Spectate
          </ButtonSpectate>
        </StyledCardRoom>
      )}
    />
  )
}

RoomCard.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  guest: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default RoomCard
