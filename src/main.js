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
import InboxPage from './components/InboxPage.jsx';
import Message from './components/Message.jsx';


ReactDOM.render(
  <HashRouter>
    <Router>
      <div className='App'>
        <div className='menu-bar'>
              <div className='menu-item'>
                  <Link className='menu-item-link' to='/about'>About</Link>
              </div>

              <div className='menu-item'>
                  <Link className='menu-item-link' to='/inbox'>Inbox</Link>
              </div>
          </div>
        <Route exact path='/' component={App}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/inbox" component={InboxPage}/>
          <Route path="/inbox/messages/:messageId" component={Message}/>
      </div>
    </Router>
  </HashRouter>,
    document.getElementById('mount-point')
);
