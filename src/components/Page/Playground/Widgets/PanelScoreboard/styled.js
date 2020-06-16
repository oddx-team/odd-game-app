import styled from 'styled-components'

export const StyledScoreboard = styled.div`
  position: absolute;
  top: 0.4rem;
  align-items: center;
  flex-direction: column;
  width: 3.7rem;
  height: 1.55rem;
`

export const ScoreContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  margin-top: -0.1rem;
`

export const StyledPlayer = styled.div`
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

export const Avatar = styled.img`
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
`

export const Name = styled.strong`
  position: absolute;
  top: 0.05rem;
  margin-left: 0.05rem;
`

export const Points = styled.div`
  position: absolute;
  top: 0.26rem;
  left: 0.55rem;
  font-size: 0.16rem;
`

export const Host = styled.div`
  position: absolute;
  top: 0.05rem;
  right: 0.1rem;
  margin-left: 0.05rem;
  font-size: 0.17rem;
`
