import styled from 'styled-components/macro'
import { imageCDN } from 'mixins'

export const TabContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`

export const StyledTab = styled.div`
  width: 1.5rem;
  height: 0.5rem;
  color: #000;
  font-size: 0.21rem;
  padding-top: 0.05rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  i {
    ${imageCDN('icon-vn.png', '0.3rem', '0.3rem')};
    margin-right: 0.05rem;
    display: inline-block;
  }

  &.active {
    background: #fff;
    height: 0.53rem;
    border-right: 0.013rem solid #ddd;
    border-left: 0.013rem solid #ddd;
    font-weight: bold;
    z-index: 1;
  }

  &.global {
    i {
      ${imageCDN('icon-global.png', '0.3rem', '0.3rem')};
    }
  }
`
