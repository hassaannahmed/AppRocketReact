import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import './TopBar.css';

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

class TopBar extends Component {
  login = (e) => {
    e.preventDefault();
    this.props.joinChat();
  };
  goBack = (e) => {
    e.preventDefault();
    this.props.goBack();
  };

  render() {
    return (
      <div className='infoBar'>
        <div className='leftInnerContainer'>
          <Typography>{this.props.chatWith}</Typography>
        </div>
        <div className='rightInnerContainer'></div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopBar);
