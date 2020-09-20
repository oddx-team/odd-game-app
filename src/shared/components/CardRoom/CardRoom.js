import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import { Title, StyledCardRoom, CardRoomInner } from './styled'
import { useHistory } from 'react-router-dom'

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

export const CardRoom = ({ name, host, current, guest, status, slug }) => {
  const history = useHistory()

  const viewRoom = () => {
    history.push(`/rooms/${slug}`)
  }
  const joinRoom = async () => {
    history.push(`/rooms/${slug}`)
  }

  return (
    <StyledCardRoom className='wrapper'>
      <CardRoomInner>
        <Title>{name}</Title>
        <Text title='Host' value={host} />
        <Text title='Room' value={`${current}/10`} />
        <Text title='Viewers' value={`${guest}`} />
        <Text title='Status' value={status} />
      </CardRoomInner>

      <Button variant='success' icon='game' onClick={joinRoom}>
          Join
      </Button>
      <Button variant='primary' icon='inside' onClick={viewRoom}>
          View
      </Button>
    </StyledCardRoom>
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
