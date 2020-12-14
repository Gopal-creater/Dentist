import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/Fonts/sf-ui-display-black-58646a6b80d5a.otf';
import './assets/Fonts/sf-ui-display-bold-58646a511e3d9.otf';
import './assets/Fonts/sf-ui-display-heavy-586470160b9e5.otf';
import './assets/Fonts/sf-ui-display-light-58646b33e0551.otf';
import './assets/Fonts/sf-ui-display-medium-58646be638f96.otf';
import './assets/Fonts/sf-ui-display-semibold-58646eddcae92.otf';
import './assets/Fonts/sf-ui-display-thin-58646e9b26e8b.otf';
import './assets/Fonts/sf-ui-display-ultralight-58646b19bf205.otf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
