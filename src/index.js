import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);
