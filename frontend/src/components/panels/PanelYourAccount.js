import React from 'react';
import './PanelYourAccount.scss';
import PanelLoginForm from './PanelLoginForm';
import PanelRegisterForm from './PanelRegisterForm';
import { useState } from 'react';

function PanelYourAccount() {
  const [activeRegister, setActiveRegister] = useState();
  const switchToResigter = () => setActiveRegister(true);
  const switchToLogin = () => setActiveRegister(false);
  return (
    <div className={'panel-login ' + (activeRegister && 'active-register')}>
      {/* <PanelLogo /> */}
      <PanelLoginForm
        className='form-container login-form'
        onSwitchForm={switchToResigter}
      />
      <PanelRegisterForm
        className='form-container register-form'
        onSwitchForm={switchToLogin}
      />
      <div className='overlay-container'>
        <div className='overlay'>
          <div className='panel-logo left-logo'>
            <div className='logo'></div>
            <div className='description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been abc.
            </div>
          </div>
          <div className='panel-logo right-logo'>
            <div className='welcome'>Welcome to</div>
            <div className='welcome-logo'></div>
            <div className='description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been abc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelYourAccount;
