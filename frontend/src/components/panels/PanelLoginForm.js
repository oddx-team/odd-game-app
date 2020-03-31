import React from "react";
import "./PanelLoginForm.scss";

function PanelLoginForm(props) {
  const handleToResigter = (e) => {
    e.preventDefault();
    props.onSwitchForm();
  }
  return (
    <form className={"form-login " + props.className}>
      <div className="title">Sign in</div>
      <div className="username">
        <input type="text" placeholder="Nickname" />
      </div>
      <div className="password">
        <input type="password" placeholder="Password" />
      </div>

      <button className="btn-signin">Sign in</button>
      <button className="btn-register" onClick={handleToResigter}>Sign up?</button>
    </form>
  );
}

export default PanelLoginForm;