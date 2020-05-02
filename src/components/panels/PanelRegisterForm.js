import React from 'react';
import './PanelRegisterForm.scss';

const PanelRegisterForm = props => {
  const switchToLogin = e => {
    e.preventDefault();
    props.switchForm();
  };

  return (
    <form className="form-register">
      <div className="title">Sign up</div>
      <div className="username">
        <input type="text" placeholder="Nickname" />
      </div>
      <div className="email">
        <input type="email" placeholder="Email" />
      </div>
      <div className="password">
        <input type="password" placeholder="Password" />
      </div>
      <button className="btn-signup" type="submit">
        <span>Sign up</span>
      </button>
      <button className="btn-login" onClick={switchToLogin}>
        <span>Sign in?</span>
      </button>
    </form>
  );
};

export default PanelRegisterForm;
