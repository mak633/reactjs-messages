import React from 'react';
import messages from '../messages.json';

import './Message.less';
import './InboxPage.less';

export default class Message extends React.Component{
   constructor(props, context) {
     super(props, context)
     const {messageId} = this.props.match.params
     this.state = {
       message: messages.find(message => message.id === messageId)
     };

   }
   componentWillReceiveProps(nextProps) {
     const { messageId: prevId } = this.props.match.params;
        const { messageId: nextId } = nextProps.match.params;

        if (prevId !== nextId) {
            this.setState({
                message: messages.find(message => message.id === nextId)
            });
        }
   }
    render() {
        const { message } = this.state;

        return (
          <div className="Message">
            <p><b>From:</b> {message.senderName} ({message.senderEmail})</p>
            <p><b>To:</b> you</p>
            <p><b>Subject:</b> {message.subject}</p>
            <hr />
            <p>{message.body}</p>
          </div>
        )
    }
}
