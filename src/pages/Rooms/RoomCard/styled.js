import styled from 'styled-components/macro'

export const Title = styled.div`
  color: #000;
  font-size: 0.3rem;
  font-weight: bold;
  margin-bottom: 0.08rem;
`

export const CardRoomInner = styled.div`
  padding: 0.1rem 0 0 0.2rem;
  color: #000;
  font-size: 0.19rem;
  font-weight: normal;
`

export const StyledCardRoom = styled.div`
  width: 2.8rem;
  height: 2.6rem;
  margin: 0.22rem 0.5rem 0 0;
  color: #000;
  font-size: 0.2rem;
  text-align: left;
`

export const StyledButton = styled.button`
  color: #fff;
  font-size: 0.17rem;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 1.94rem;
  height: 0.4rem;
`

export const ButtonJoin = styled(StyledButton)`
  width: 1rem;
  left: 0.12rem;
`

export const ButtonSpectate = styled(StyledButton)`
  width: 1.3rem;
  left: 1.3rem;
`
