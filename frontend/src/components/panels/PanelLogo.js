import React from 'react';
import './PanelLogo.scss';

function PanelLogo(props) {
  return (
    <div className={'panel-logo ' + props.className}>
      <div className='logo'></div>
      <div className='description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been abc.
      </div>
    </div>
  );
}

export default PanelLogo;
