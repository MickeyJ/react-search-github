import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router';
import routes from './config/Routes'

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
