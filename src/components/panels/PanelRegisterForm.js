import React from 'react';
import PropTypes from 'prop-types';
import 'stylesheets/panels/PanelRegisterForm.scss';

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

PanelRegisterForm.propTypes = {
  switchForm: PropTypes.func.isRequired,
};

export default PanelRegisterForm;
