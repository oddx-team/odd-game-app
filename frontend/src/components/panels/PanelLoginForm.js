import React from 'react';
import './PanelLoginForm.scss';

const PanelLoginForm = (props) => {
  const handleToRegister = (e) => {
    e.preventDefault();
    props.onSwitchForm();
  };

  return (
    <form className={'form-login ' + props.className}>
      <div className='title'>Sign in</div>
      <div className='username'>
        <input type='text' placeholder='Nickname' />
      </div>
      <div className='password'>
        <input type='password' placeholder='Password' />
      </div>

      <button className='btn-signin'>Sign in</button>
      <button className='btn-register' onClick={handleToRegister}>
        Sign up?
      </button>
    </form>
  );
};

export default PanelLoginForm;
