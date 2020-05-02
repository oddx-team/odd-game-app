import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/global.scss';
import setupLayout from './layout';

setupLayout();
ReactDOM.render(<App />, document.getElementById('root'));
