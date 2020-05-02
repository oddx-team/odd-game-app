import React, { useState } from 'react';
import PanelLoginForm from './PanelLoginForm';
import PanelRegisterForm from './PanelRegisterForm';
import classNames from 'classnames';
import './PanelYourAccount.scss';

const PanelYourAccount = () => {
  const [activeRegister, setActiveRegister] = useState();
  const switchForm = () => {
    setActiveRegister(!activeRegister);
  };

  const containerClasses = classNames({
    'form-container': true,
    'show-register': activeRegister,
  });

  return (
    <div className={containerClasses}>
      <PanelLoginForm switchForm={switchForm} />
      <PanelRegisterForm switchForm={switchForm} />
      <div className="overlay-container">
        <div className="overlay">
          <div className="panel-logo left">
            <div className="logo" />
            <div className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been abc.
            </div>
          </div>

          <div className="panel-logo right">
            <div className="welcome">
              <div className="title">Welcome to</div>
              <div className="logo" />
            </div>
            <div className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been abc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelYourAccount;
