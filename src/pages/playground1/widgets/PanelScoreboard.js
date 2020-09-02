import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const StyledScoreboard = styled.div`
  position: absolute;
  top: 0.4rem;
  align-items: center;
  flex-direction: column;
  width: 3.7rem;
  height: 1.55rem;
`

const ScoreContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  margin-top: -0.1rem;
`

const StyledPlayer = styled.div`
  width: 100%;
  height: 0.53rem;
  position: relative;
  text-align: left;
  font-size: 0.17rem;
  padding-left: 0.15rem;
  padding-top: 0.05rem;

  &:nth-child(even) {
    background: #eee;
  }
`

const Avatar = styled.img`
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
`

const Name = styled.strong`
  position: absolute;
  top: 0.05rem;
  margin-left: 0.05rem;
`

const Points = styled.div`
  position: absolute;
  top: 0.26rem;
  left: 0.55rem;
  font-size: 0.16rem;
`

const Host = styled.div`
  position: absolute;
  top: 0.05rem;
  right: 0.1rem;
  margin-left: 0.05rem;
  font-size: 0.17rem;
`
