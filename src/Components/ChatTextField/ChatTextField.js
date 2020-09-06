import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import './ChatTextField.css';

const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});

class ChatTextField extends Component {
  constructor(props) {
    super(props);
    console.log('inSearch');
  }
  state = {
    contacts: [],
  };

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return;
  }
}

export default withStyles(styles, { withTheme: true })(ChatTextField);
