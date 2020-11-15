import React from 'react'
import { Button } from '../Button'
import { Title, StyledCardRoom, CardCont } from './styled'
import { useHistory } from 'react-router-dom'

type CardRoomProps = {
  Id: string;
  name: string;
  slug: string;
  host: string;
  current: number;
  guest: number;
  status: string;
}

type TextProps = {
  title: string;
  value: string;
}

const Text: React.FC<TextProps> = ({ title, value }) => {
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

export const CardRoom: React.FC<CardRoomProps> =
  ({ name, host, current, status, slug }) => {
    const history = useHistory()

    const viewRoom = () => {
      history.push(`/rooms/${slug}`)
    }
    const joinRoom = () => {
      history.push(`/rooms/${slug}`)
    }

    return (
      <StyledCardRoom className='wrapper'>
        <CardCont>
          <Title>{name}</Title>
          <Text title='Host' value={host} />
          <Text title='Room' value={`${current}/10`} />
          <Text title='Status' value={status} />
        </CardCont>

        <Button variant='success' icon='game' onClick={joinRoom}>Join</Button>
        <Button variant='primary' icon='inside' onClick={viewRoom}>View</Button>
      </StyledCardRoom>
    )
  }


