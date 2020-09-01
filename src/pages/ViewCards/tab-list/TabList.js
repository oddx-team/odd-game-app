import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TabContainer, StyledTab } from './styled'

const Tab = ({ active, text, onClick, global }) => {
  return (
    <StyledTab className={classNames({ active, global })} onClick={onClick}>
      <i />
      <span>{text}</span>
    </StyledTab>
  )
}

export const TabList = ({ activeTab, switchTab }) => {
  const active = idx => {
    return idx === activeTab ? 'active' : ''
  }

  return (
    <TabContainer>
      <Tab active={active(0)} text='EN cards' onClick={() => switchTab(0)} global />
      <Tab active={active(1)} text='VN cards' onClick={() => switchTab(1)} />
    </TabContainer>
  )
}

Tab.propTypes = {
  active: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  global: PropTypes.bool
}

TabList.propTypes = {
  activeTab: PropTypes.number.isRequired,
  switchTab: PropTypes.func.isRequired
}
