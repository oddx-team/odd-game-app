import React from 'react';
import PanelLogo from './PanelLogo';
import './PanelRegister.scss';

function PanelRegister() {
  return (
    <div className='panel-register'>
      <form className='form-login'>
        <div className='title'>Sign up</div>
        <div className='username'>
          <input type='text' placeholder='Nickname' />
        </div>
        <div className='email'>
          <input type='email' placeholder='Email' />
        </div>
        <div className='password'>
          <input type='password' placeholder='Password' />
        </div>
        <button className='btn-signup'>Sign up</button>
      </form>

      <PanelLogo />
    </div>
  );
}

export default PanelRegister;
