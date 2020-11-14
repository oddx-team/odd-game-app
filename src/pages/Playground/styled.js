import styled from 'styled-components/macro'
import { mixin, font } from 'shared/utils/styles'
import { Button } from 'shared/components/Button'
import imgSpaceship from '../../assets/spaceship.png'
import imgCards from '../../assets/icon-cards.png'

// --------- GENERAL PLAYGROUND ----------
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

export const CardsList = styled.div`
  position: absolute;
  display: flex;
  padding-left: 0.08rem;
  padding-top: 0.08rem;
  margin-top: 0.08rem;
  height: 3.55rem;
  width: 9rem;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
  transition: background-color 0.35s;
  opacity: ${props => props.isDraggingOver ? 0.65 : 1};
  background-color: ${props => props.isDraggingOver ? '#81D4FA' : 'transparent'};
`

// --------- DROPZONE -----------
export const WhiteCardContainer = styled(BlackCardContainer)`
  position: absolute;
  top: 0.1rem;
  left: 2.8rem;
  width: 9rem;
`

export const Text = styled.span``

export const ButtonInvite = styled.button`
  ${mixin.boxShadow}
  ${mixin.flexCenter}
  position: absolute;
  top: 0.04rem;
  right: 0.1rem; 
  font-size: 0.17rem;
  font-weight: bold;
  color: #fff;
  background: #0477BD;
  padding: 0 0.15rem;
  border-radius: 0.2rem;

  ${Text} {
    margin-left: 0.03rem;
  }
`

export const DropzoneTitle = styled.div`
  font-size: 0.18rem;
`

export const DropzoneOddx = styled.div`
  ${mixin.size(8.9, 3.55)}
  position: absolute;
  top: 0.4rem;
  background: rgba(33, 33, 33, 0.04);
  padding: 0.1rem;

  &::before {
    ${mixin.size(8.68, 3.33)}
    content: '';
    position: absolute;
    background-image: repeating-linear-gradient(172deg, #59595A, #59595A 0.09rem, transparent 0.09rem, transparent 0.15rem, #59595A 0.15rem), repeating-linear-gradient(262deg, #59595A, #59595A 0.09rem, transparent 0.09rem, transparent 0.15rem, #59595A 0.15rem), repeating-linear-gradient(-8deg, #59595A, #59595A 0.09rem, transparent 0.09rem, transparent 0.15rem, #59595A 0.15rem), repeating-linear-gradient(82deg, #59595A, #59595A 0.09rem, transparent 0.09rem, transparent 0.15rem, #59595A 0.15rem);
    background-size: 0.018rem 100%, 100% 0.018rem, 0.018rem 100% , 100% 0.018rem;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    opacity: 0.6;
  }
`

export const ImgCard = styled.div`
  ${mixin.backgroundImage(imgCards)}
  ${mixin.size(0.8, 0.8)}
  position: absolute;
  top: 1.2rem;
  left: 2.6rem;
`

export const ImgSpaceship = styled.div`
  ${mixin.backgroundImage(imgSpaceship)}
  ${mixin.size(2.38, 2.6)}
  position: absolute;
  top: 0.4rem;
  right: 1.8rem;
`

export const DropHereText = styled.span`
  color: rgba(0, 0, 0, 0.58);
  font-size: 0.27rem;
  position: absolute;
  top: 2.2rem;
  left: 1.8rem;
`

// --------- PLAYGROUND COLLECTION----------
export const CollectionWrapper = styled.div`
  ${mixin.boxShadow}
  width: 11.8rem;
  height: 1.85rem;
  position: fixed;
  bottom: 0rem;
  left: 1.8rem;
  background: #fff;
`

export const TopBar = styled.div`
  ${mixin.size(0.08, 1.85)}
  position: absolute;
  left: 0;
  background: #0477BD;
  border-top-right-radius: 0.3rem;
`

export const LeftBar = styled.div`
  ${mixin.size(10.3, 0.08)}
  position: absolute;
  top: 0;
  right: 0rem;
  background: #0477BD;
  border-bottom-left-radius: 0.3rem;
`

export const CountDown = styled.div`
  ${font.size(0.22)};
  position: absolute;
  top: 0.14rem;
  left: 0.33rem;
`

export const CardsImage = styled.img`
  ${mixin.size(0.6, 0.6)}
  position: absolute;
  top: 0.55rem;
  left: 0.45rem; 
`

export const CollectionTitle = styled.span`
  position: absolute;
  top: 1.3rem;
  left: 0.23rem; 
  font-size: 0.18rem;
  font-weight: bold;
  color: #fff;
  background: #0477BD;
  padding: 0.04rem 0.13rem 0.02rem;
  border-radius: 0.2rem;
`

export const CollectionContent = styled.div`
  ${mixin.flexCenter}
  position: absolute;
  top: 0.3rem;
  left: 1.6rem;
  width: 10.2rem;
  height: 1.5rem;
  justify-content: flex-start;
  overflow-y: auto;
`

export const PlaygroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: -0.55rem;
  position: relative;
  padding-top: 0.1rem;
  font-family: 'Oxamium', sans-serif;
`

export const CardWrapper = styled.div`
  &:focus {
    outline: none;
  }
`
