import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import './SearchBar.css';

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

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log('inSearch');
  }
  state = {
    contacts: [],
  };
  //
  componentDidMount() {
    const body = { username: this.props.state.loggedInUsername };
    console.log(body);
    axios
      .post('https://approcket-backend.herokuapp.com/api/users/getAll', body)
      .then((res) => {
        console.log(res.data);
        this.setState({ contacts: res.data.data });
      });
  }

  valueChange = (value) => {
    //value contains the new username selected
    this.props.changeChatWith(value);
  };

  render() {
    return (
      <div className='infoBar'>
        <Autocomplete
          id='free-solo-demo'
          Search
          Contact
          fullWidth='true'
          options={this.state.contacts}
          onChange={(event, newValue) => {
            this.valueChange(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search Contact'
              margin='normal'
              variant='outlined'
            />
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SearchBar);
