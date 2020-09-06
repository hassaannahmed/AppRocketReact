import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './Message.css';
import { Typography } from '@material-ui/core';

export class Message extends Component {
  state = {
    isSentByMe: false,
  };
  constructor(props) {
    super(props);
    //console.log(props);
    if (props.message.senderId == props.loggedIn) {
      this.state = {
        isSentByMe: true,
      };
    }
  }

  render() {
    const { isSentByMe } = this.state;

    switch (isSentByMe) {
      case true:
        return (
          <div className='messageContainer justifyEnd'>
            <p className='sentText pr-10'>You</p>
            <div className='messageBox backgroundBlue'>
              <Typography className='messageText'>
                {this.props.message.msgText}
              </Typography>
            </div>
          </div>
        );
      case false:
        return (
          <div className='messageContainer justifyStart'>
            <div className='messageBox backgroundBlue'>
              <Typography className='messageText'>
                {this.props.message.msgText}
              </Typography>
            </div>
            <p className='sentText pl-10 '>{this.props.chatWithUsername}</p>
          </div>
        );
    }
  }
}
export default Message;
