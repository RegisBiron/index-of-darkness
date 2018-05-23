import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from '../../components/Intro';

import './app.css';

//api_key=01721a42-90b4-4461-a87d-0c8a9ba269f1

const App = () => (
  <Router>
    <Route path="/" component={Intro} />
  </Router>
);

export default App;
