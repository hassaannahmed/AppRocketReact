import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import CardMedia from '@material-ui/core/CardMedia';

import TopBar from '../TopBar/TopBar';
import './Chat.css';
import SearchBar from '../SearchBar/SearchBar';
import Messages from '../Messages/Messages';
import Contacts from '../Contacts/Contacts';
import axios from 'axios';
import ChatTextField from '../ChatTextField/ChatTextField';

import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:5000';

const styles = (theme) => ({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#d3d3d3',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
  input: {
    color: '#74CAEB',
  },
});
var socket;
class Chat extends Component {
  state = {
    loggedInUsername: '',
    loggedIn: '',
  };
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      loggedIn: props.state.id,
      chatWith: '',
      conversationId: '',
      loggedInUsername: props.state.username,
      conversation: [],
      allConversations: [],
      typed: '',
      endpoint: ENDPOINT,
    };
    socket = socketIOClient(this.state.endpoint);
    socket.on('message', (message) => {
      console.log('received');
      const msg = {
        conversationId: message.conversationId,
        msgText: message.msgText,
        senderId: message.id,
      };
      console.log('pushed');
      let convo = this.state.conversation;
      convo.push(msg);
      this.setState({
        conversation: convo,
      });
    });
  }

  // Change Chat With
  changeChatWith = (id) => {
    console.log('changing Chat with to' + id);

    this.setState({
      conversationId: id,
    });
    const grabMessages = {
      id: this.state.loggedIn,
      conversationId: id,
    };
    axios
      .post('http://localhost:5000/api/conversations/messages', grabMessages)
      .then((res) => {
        console.log('All Messages');
        this.setState({ conversation: res.data });
      });

    socket.emit('joinRoom', { userId: this.state.loggedIn, room: id });
  };

  componentDidMount() {
    const body = { id: this.state.loggedIn };
    axios.post('http://localhost:5000/api/conversations', body).then((res) => {
      this.setState({ allConversations: res.data });
      let conversationId = this.state.conversationId;
      if (this.state.conversationId == '') {
        conversationId = res.data[0]._id;
      }
      const grabMessages = {
        id: this.state.loggedIn,
        conversationId: conversationId,
      };
      axios
        .post('http://localhost:5000/api/conversations/messages', grabMessages)
        .then((res) => {
          console.log('All Messages');
          this.setState({ conversation: res.data });
        });
    });
  }
  handleChange = (e) => {
    this.setState({ typed: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Do Something with typed
    const grabMessages = {
      id: this.state.loggedIn,
      conversationId: this.state.conversationId,
      msgText: this.state.typed,
    };
    socket.emit('chatMessage', grabMessages);
    this.setState({
      typed: '',
    });
    axios.post(
      'http://localhost:5000/api/conversations/messages/new',
      grabMessages
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className='outerContainer'>
          <div className='contacts'>
            <SearchBar
              changeChatWith={this.changeChatWith}
              conversation
              state={this.state}
            />
            <Contacts
              allConversations={this.state.allConversations}
              changeChatWith={this.changeChatWith}
            />
          </div>
          <div className='container'>
            <TopBar chatWith={this.state.chatWith} />
            <Messages
              conversation={this.state.conversation}
              loggedIn={this.state.loggedIn}
              loggedInUsername={this.state.loggedInUsername}
              chatWithUsername={this.state.chatWith}
            />
            <form
              className={classes.root}
              onSubmit={this.handleSubmit}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='standard-basic'
                label='Standard'
                value={this.state.typed}
                onChange={this.handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Chat);
