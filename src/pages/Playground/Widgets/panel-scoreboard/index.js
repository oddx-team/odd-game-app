import React from 'react'
import PropTypes from 'prop-types'
import { StyledScoreboard, ScoreContainer, StyledPlayer, Avatar, Name, Host, Points } from './styled'

const Player = ({ name, points, host }) => {
  return (
    <StyledPlayer>
      <Avatar src='https://www.tinygraphs.com/spaceinvaders/guest?size=60' />
      <Name>{name}</Name>
      <Points>{points} Awesome Pts</Points>

      {host && <Host>Host</Host>}
    </StyledPlayer>
  )
}

export const PanelScoreboard = () => {
  return (
    <StyledScoreboard>
      <ScoreContainer>
        <Player name='admin' points='10' />
        <Player name='admin' points='10' host />
        <Player name='admin' points='10' />
        <Player name='admin' points='10' />
        <Player name='admin' points='10' />
        <Player name='admin' points='10' />
      </ScoreContainer>
    </StyledScoreboard>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  points: PropTypes.string,
  host: PropTypes.bool
}
