import React from 'react';
import PanelLogo from './PanelLogo';
import './PanelLogin.scss';

function PanelLogin() {
  return (
    <div className='panel-login'>
      <PanelLogo />

      <form className='form-login'>
        <div className='title'>Sign in</div>
        <div className='username'>
          <input type='text' placeholder='Nickname' />
        </div>
        <div className='password'>
          <input type='password' placeholder='Password' />
        </div>

        <button className='btn-signin'>Sign in</button>
        <button className='btn-signup'>Sign up?</button>
      </form>
    </div>
  );
}

export default PanelLogin;
