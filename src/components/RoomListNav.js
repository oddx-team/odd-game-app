import React, { useState } from 'react';
import classNames from 'classnames';
import IconVN from 'cdn/assets/icon-vn.png';
import IconGlobal from 'cdn/assets/icon-global.png';
import 'stylesheets/RoomListNav.scss';

const RoomListNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = idx => {
    return idx === activeIndex ? 'active' : '';
  };

  return (
    <div className="room-list-nav">
      <div className={classNames('tab-global', active(0))} onClick={e => setActiveIndex(0)}>
        <img src={IconGlobal} />
        <span>Global games</span>
      </div>
      <div className={classNames('tab-vn', active(1))} onClick={e => setActiveIndex(1)}>
        <img src={IconVN} />
        <span>VN games</span>
      </div>
    </div>
  );
};

export default RoomListNav;
