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

class Chat extends Component {
  state = {
    loggedInUsername: '',
    loggedIn: '',
  };
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      loggedIn: props.state.id,
      chatWith: '',
      loggedInUsername: props.state.username,
    };
  }

  login = (e) => {
    e.preventDefault();
    this.props.joinChat();
  };
  goBack = (e) => {
    e.preventDefault();
    this.props.goBack();
  };

  changeChatWith = (value) => {
    this.setState({ chatWith: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className='outerContainer'>
          <div className='contacts'>
            <SearchBar
              changeChatWith={this.changeChatWith}
              state={this.state}
            />
          </div>
          <div className='container'>
            <TopBar chatWith={this.state.chatWith} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Chat);
