import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PanelChat from 'components/panels/PanelChat';
import PanelScoreboard from 'components/panels/PanelScoreboard';
import { PlaygroundWrapper, PlaygroundHeader, Tab, Container } from 'stylesheets/PlaygroundWidgets.style';

const StyledTab = ({ active, label, onClick }) => {
  const tabClass = classNames({ active });

  return (
    <Tab className={tabClass} onClick={onClick}>
      {label}
    </Tab>
  );
};

const PlaygroundWidgets = () => {
  const [activeTab, setActiveTab] = useState(0);

  const active = index => {
    return index === activeTab;
  };

  return (
    <PlaygroundWrapper>
      <PlaygroundHeader>
        <StyledTab active={active(0)} onClick={() => setActiveTab(0)} label="Chat room" />
        <StyledTab active={active(1)} onClick={() => setActiveTab(1)} label="Scoreboard" />
      </PlaygroundHeader>

      <Container>
        <div>{active(0) && <PanelChat />}</div>
        <div>{active(1) && <PanelScoreboard />}</div>
      </Container>
    </PlaygroundWrapper>
  );
};

StyledTab.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default PlaygroundWidgets;
