import ReactDOM from 'react-dom';
import React from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import { Router, Route, hashHistory } from 'react-router';
import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';


ReactDOM.render(
  <HashRouter>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

      <hr/>
        <Route exact path='/' component={App}/>
        <Route path="/about" component={AboutPage}/>
      </div>
    </Router>
  </HashRouter>,
    document.getElementById('mount-point')
);
