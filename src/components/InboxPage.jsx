import React from 'react';
import MessagePreview from './MessagePreview.jsx';
import Message from './Message.jsx';

import messages from '../messages.json';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { browserHistory } from 'history'
import './InboxPage.less';
const PropTypes = require('prop-types');

export default class InboxPage extends React.Component{

  constructor(props, context) {
      super(props, context);
      this.hanlePreview = this.hanlePreview.bind(this);
      this.state = {
        messages,
        messageItem: ''
      };
    }

    hanlePreview(messageId){
      this.state.massageItem = messageId;
      this.context.router.history.push(`/inbox/messages/${messageId}`)
    }
    render() {
      const { messages } = this.state;
      //const { messageId: selectedMessageId} = this.props.match.params;
      const selectedMessageId = this.state.massageItem;
      return (
        <div className="InboxPage">
          <div className="messages">
            {
              messages.map(message =>
                <MessagePreview
                  onClick={this.hanlePreview.bind(null, message.id)}
                  selected={message.id === selectedMessageId}
                  key={message.id}
                  title={message.subject}
                  sender={message.senderName}/>
              )
            }
          </div>
          <div className="message-container">
            <Route path="/inbox/messages/:messageId" component={Message}/>
          </div>
        </div>
      );
    }
}
InboxPage.contextTypes = {
  router: PropTypes.object.isRequired
};
