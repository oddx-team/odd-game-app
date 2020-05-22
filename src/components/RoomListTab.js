import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconVN from 'cdn/assets/icon-vn.png';
import IconGlobal from 'cdn/assets/icon-global.png';
import 'stylesheets/RoomListTab.scss';

const RoomListTab = ({ activeTab, switchTab }) => {
  const active = idx => {
    return idx === activeTab ? 'active' : '';
  };

  return (
    <div className="room-list-tab">
      <div className={classNames('tab-global', active(0))} onClick={() => switchTab(0)}>
        <img alt={'IconGlobal'} src={IconGlobal} />
        <span>Global games</span>
      </div>
      <div className={classNames('tab-vn', active(1))} onClick={() => switchTab(1)}>
        <img alt={'IconVN'} src={IconVN} />
        <span>VN games</span>
      </div>
    </div>
  );
};

RoomListTab.propTypes = {
  activeTab: PropTypes.bool.isRequired,
  switchTab: PropTypes.func.isRequired,
};

export default RoomListTab;
