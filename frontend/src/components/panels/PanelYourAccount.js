import React from 'react';
import PanelLogo from './PanelLogo';
import PanelLogoWelcome from './PanelLogoWelcome';
import './PanelYourAccount.scss';
import PanelLoginForm from './PanelLoginForm';
import PanelRegisterForm from './PanelRegisterForm';
import { useState } from 'react';

function PanelYourAccount() {
  const [activeRegister, setActiveRegister] = useState();
  console.log('reset' + activeRegister);
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
          <PanelLogo className='left-logo' />
          <PanelLogoWelcome className='right-logo' />
        </div>
      </div>
    </div>
  );
}

export default PanelYourAccount;
