import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PanelChat } from './PanelChat'
import { PanelScoreboard } from './panel-scoreboard'
import { WidgetWrapper, Header, Tab, Container } from './styled'

const StyledTab = ({ active, label, onClick }) => {
  return (
    <Tab className={classNames({ active })} onClick={onClick}>
      {label}
    </Tab>
  )
}

export const PlaygroundWidgets = () => {
  const [activeTab, setActiveTab] = useState(0)

  const active = index => {
    return index === activeTab
  }

  return (
    <WidgetWrapper>
      <Header>
        <StyledTab active={active(0)} onClick={() => setActiveTab(0)} label='Chat room' />
        <StyledTab active={active(1)} onClick={() => setActiveTab(1)} label='Scoreboard' />
      </Header>

      <Container>
        <div>{active(0) && <PanelChat />}</div>
        <div>{active(1) && <PanelScoreboard />}</div>
      </Container>
    </WidgetWrapper>
  )
}

StyledTab.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
}
