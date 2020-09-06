import React, { Component } from 'react';
import Contact from './Contact/Contact';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListSubheader from '@material-ui/core/ListSubheader';

import './Contacts.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
});

class Contacts extends Component {
  render() {
    const { classes } = this.props;
    const contacts = this.props.allConversations.map((conversation) => (
      <div key={conversation._id}>
        <Contact
          conversation={conversation}
          changeChatWith={this.props.changeChatWith}
        />
      </div>
    ));

    return (
      <List
        className='scroll'
        className={classes.root}
        style={{ maxHeight: '88%', overflow: 'auto' }}
        subheader={<li />}
        showsVerticalScrollIndicator={false}
      >
        {contacts}
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Contacts);
