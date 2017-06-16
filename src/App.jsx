import React from 'react';
import { Link } from 'react-router-dom';
import './App.less'

export default class App extends React.Component {
  render() {
        return (
            <div>
              <div className='content'>
                    {this.props.children}
              </div>
            </div>
        )
  }
}
