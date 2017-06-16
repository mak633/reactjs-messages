import React from 'react';
import MessagePreview from './MessagePreview.jsx';
import messages from '../messages.json';
import { browserHistory } from 'history'
import './InboxPage.less';
const PropTypes = require('prop-types');

export default class InboxPage extends React.Component{

  constructor(props, context) {
      super(props, context);
      this.hanlePreview = this.hanlePreview.bind(this);
      this.state = {
        messages
      };
    }

    hanlePreview(messageId){
      this.context.router.history.push(`/inbox/messages/${messageId}`)
    }
    render() {
      const { messages } = this.state;
      console.log(this.props);
      const { messageId: selectedMessageId} = this.props.match.params;
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
            {this.props.children}
          </div>
        </div>
      );
    }
}
InboxPage.contextTypes = {
  router: PropTypes.object.isRequired
};
