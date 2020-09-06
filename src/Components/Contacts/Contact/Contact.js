import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Contact.css';
import { Typography } from '@material-ui/core';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: props.conversation,
    };
  }

  selectChat = (e) => {
    e.preventDefault();
    this.props.changeChatWith(this.state.conversation._id);
  };

  render() {
    return (
      <ListItem key={this.props.conversation._id} onClick={this.selectChat}>
        <ListItemText primary='ConversationName' />
      </ListItem>
    );
  }
}
export default Contact;
