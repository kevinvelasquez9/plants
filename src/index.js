import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <Router basename="/plants">
    <App />
  </Router>,
  document.getElementById('root')
);
