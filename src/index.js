import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import AnxietyApp from './components/AnxietyApp';


ReactDOM.render(
  <Router>
    <AnxietyApp />
  </Router>,
  document.getElementById('root')
);


