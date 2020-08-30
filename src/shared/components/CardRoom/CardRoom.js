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

export const CardRoom = props => {
  const {
    host,
    current,
    guest,
    status,
    slug
  } = props

  const trySpectating = (history, slug) => {
    history.push(`/rooms/${slug}`)
  }
  const tryJoining = async (history, slug) => {
    history.push(`/rooms/${slug}`)
  }

  return (
    <Route
      render={({ history }) => (
        <StyledCardRoom className='wrapper block'>
          <CardRoomInner>
            <Title>{props.name}</Title>
            <Text title='Host' value={host} />
            <Text title='Room' value={`${current}/10`} />
            <Text title='Spectate' value={`${guest}`} />
            <Text title='Status' value={status} />
          </CardRoomInner>

          <ButtonJoin className='block accent' onClick={() => tryJoining(history, slug)}>
            Join
          </ButtonJoin>
          <ButtonSpectate className='block blue' onClick={() => trySpectating(history, slug)}>
            Spectate
          </ButtonSpectate>
        </StyledCardRoom>
      )}
    />
  )
}

CardRoom.propTypes = {
  Id: PropTypes.string,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string,
  host: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  guest: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
