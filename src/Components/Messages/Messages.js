import React, { Component } from 'react';

import Message from './Message/Message';
import { withStyles } from '@material-ui/core/styles';
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';

import TextField from '@material-ui/core/TextField';
const styles = (theme) => ({
  root: {
    height: '100%',
    minHeight: '80%',
  },
});
class Messages extends Component {
  render() {
    const { classes } = this.props;

    const messages = this.props.conversation.map((message) => (
      <div key={message._id}>
        <Message
          message={message}
          loggedIn={this.props.loggedIn}
          loggedInUsername={this.props.loggedInUsername}
          chatWithUsername={this.props.chatWithUsername}
        />
      </div>
    ));
    return (
      <div>
        <ScrollToBottom className='messages' className={classes.root}>
          {messages}
        </ScrollToBottom>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Messages);
