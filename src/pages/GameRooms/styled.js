import styled from 'styled-components/macro'
import { imageCDN } from 'mixins'
import { mixin } from 'shared/utils/styles'
import { Button } from 'shared/components/Button'

export const StyledGameRooms = styled.div`
  ${mixin.flexCenter}
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const ButtonCreate = styled(Button)`
  width: 1.25rem;
  font-weight: bold;
  font-size: 0.2rem;
  text-transform: uppercase;
`

export const Container = styled.div`
  transition: all 0.4s;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  top: 0;
  background: #F1F2F5;
  padding-left: ${props => props.openSidebar ? 0.8 : 2}rem;
  padding-bottom: 0.5rem;
  position: relative;

  ${ButtonCreate} {
    transition: left 0.4s;
    position: absolute;
    left: ${props => props.openSidebar ? 8.96 : 10.2}rem;
    top: 0.45rem;
  }
`

export const Title = styled.div`
  color: #000;
  font-size: 0.25rem;
  font-weight: bold;
  text-align: left;
  margin-top: 0.1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 1.6rem;
    top: 0rem;
    cursor: pointer;
    ${imageCDN('icon-arrow-right.png', 0.38, 0.38)};
  }
`

export const Subtitle = styled.div`
  color: #000;
  font-size: 0.18rem;
  font-weight: normal;
  text-align: left;
`

export const RoomContainer = styled.div`
  ${mixin.flexCenter}
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
