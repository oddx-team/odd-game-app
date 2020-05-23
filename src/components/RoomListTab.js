import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconVN from 'cdn/assets/icon-vn.png';
import IconGlobal from 'cdn/assets/icon-global.png';
import { TabContainer, StyledTab } from 'stylesheets/RoomListTab.style';

const Tab = ({ active, text, onClick, global }) => {
  const tabIcon = global ? IconGlobal : IconVN;

  return (
    <StyledTab className={classNames(active)} onClick={onClick}>
      <img src={tabIcon} />
      <span>{text}</span>
    </StyledTab>
  );
};

const RoomListTab = ({ activeTab, switchTab }) => {
  const active = idx => {
    return idx === activeTab ? 'active' : '';
  };

  return (
    <TabContainer>
      <Tab active={active(0)} text="Global games" onClick={() => switchTab(0)} global />
      <Tab active={active(1)} text="VN games" onClick={() => switchTab(1)} />
    </TabContainer>
  );
};

RoomListTab.propTypes = {
  activeTab: PropTypes.number.isRequired,
  switchTab: PropTypes.func.isRequired,
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  global: PropTypes.bool.isRequired,
};

export default RoomListTab;
