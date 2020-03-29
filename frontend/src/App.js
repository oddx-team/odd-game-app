import React from 'react';
import './App.scss';
import PanelLogin from './components/panels/PanelLogin';
import PanelRegister from './components/panels/PanelRegister';

function App() {
  return (
    <div id='app'>
      <div className='main'>
        {/* <PanelLogin /> */}
        <PanelRegister />
      </div>
    </div>
  );
}

export default App;
