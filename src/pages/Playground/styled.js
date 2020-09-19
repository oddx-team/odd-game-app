import styled from 'styled-components/macro'
import { mixin } from 'shared/utils/styles'
import { Button } from 'shared/components/Button'

export const Header = styled.div`
  padding-top: 0.1rem;
  color: #000;
  font-size: 0.23rem;
  font-weight: bold;
  text-align: left;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`

export const LeftTitle = styled.div`
  color: #000;
  font-size: 0.2rem;
  font-style: italic;
`

export const RightTitle = styled(LeftTitle)`
  position: absolute;
  top: 0.48rem;
  margin-left: 0.15rem;
`

export const ButtonConfirm = styled(Button)`
  width: 2.42rem;
  height: 0.4rem;
  color: #fff;
  font-size: 0.21rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const BlackCardContainer = styled.div`
  padding-top: 0.1rem;
  text-align: left;

  ${ButtonConfirm} {
    margin-top: -0.1rem;
  }
`

export const WhiteCardContainer = styled(BlackCardContainer)`
`

export const CardsList = styled.div`
  position: absolute;
  top: 0.6rem;
  margin-left: 0.1rem;
  display: flex;
  padding-left: 0.08rem;
  padding-top: 0.08rem;
  margin-top: 0.2rem;
  height: 3.55rem;
  width: 9rem;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  transition: background-color 0.35s;
  opacity: ${props => props.isDraggingOver ? 0.65 : 1};
  background-color: ${props => props.isDraggingOver ? '#81D4FA' : 'transparent'};
`

export const CollectionWrapper = styled.div`
  ${mixin.boxShadow}
  width: 11.5rem;
  height: 1.85rem;
  background: #fff;
  position: absolute;
  bottom: 0rem;
  left: 0rem;
`

export const CollectionHeader = styled.div`
  color: #fff;
  font-size: 0.19rem;
  font-weight: bold;
  text-transform: uppercase;
  background: #0277bd;
  height: 0.3rem;
  padding-top: 0.07rem;
  font-family: 'Oswald', sans-serif;
`

export const CollectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 0.1rem;
  padding-left: 0.2rem;
  justify-content: flex-start;
  overflow-y: auto;
  height: 1.55rem;
  background: #FAFAFA;
`

export const PlaygroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: -0.55rem;
  position: relative;
  background: #F1F2F5;
  padding-top: 0.1rem;
`

export const CardWrapper = styled.div`
  &:focus {
    outline: none;
  }
`
