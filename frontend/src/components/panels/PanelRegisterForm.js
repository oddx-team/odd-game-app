import React from 'react';
import './PanelRegisterForm.scss';

const PanelRegisterForm = (props) => {
  const handleToRegister = (e) => {
    e.preventDefault();
    props.onSwitchForm();
  };

  return (
    <form className={'form-register ' + props.className}>
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
      <button className='btn-login' onClick={handleToRegister}>
        Sign in?
      </button>
    </form>
  );
};

export default PanelRegisterForm;
