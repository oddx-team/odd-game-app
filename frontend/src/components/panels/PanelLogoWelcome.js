import React from 'react';
import './PanelLogoWelcome.scss';

function PanelLogoWelcome(props) {
  return (
    <div className={'panel-logo ' + props.className}>
      <div className="welcome">Welcome to</div>
      <div className='welcome-logo'></div>
      <div className='description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been abc.
      </div>
    </div>
  );
}

export default PanelLogoWelcome;
