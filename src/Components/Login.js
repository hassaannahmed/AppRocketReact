import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  login = (e) => {
    e.preventDefault();
    const { username, password } = this.props.state;
    const body = { username, password };
    console.log('sending' + username + password);
    axios
      .post('https://approcket-backend.herokuapp.com/api/users/login', body)
      .then((res) => {
        console.log(res.data);
        this.props.joinChat(res.data.data.id);
      })
      .catch((err) => {
        this.setState({ open: true });
      });
  };
  goBack = (e) => {
    e.preventDefault();
    this.props.goBack();
  };

  handleClose = (e) => {
    this.state.open = false;
  };

  render() {
    const { classes, handleChange } = this.props;
    return (
      <div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={2000}
          onClose={() => this.setState({ open: false })}
        >
          <Alert severity='error'>Invalid Credentials!</Alert>
        </Snackbar>
        <Grid
          container
          direction='column'
          alignItems='center'
          justify='center'
          spacing={3}
          style={{ minHeight: '100vh', maxWidth: '100%' }}
        >
          <Grid item xs={12}>
            <form noValidate autoComplete='off'>
              <TextField
                id='outlined-basic'
                label='Username'
                className={classes.root}
                variant='outlined'
                InputProps={{
                  className: classes.input,
                }}
                InputLabelProps={{
                  className: classes.input,
                }}
                onChange={handleChange('username')}
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <form noValidate autoComplete='off'>
              <TextField
                id='outlined-basic'
                label='Password'
                className={classes.root}
                type='password'
                variant='outlined'
                InputProps={{
                  className: classes.input,
                }}
                InputLabelProps={{
                  className: classes.input,
                }}
                onChange={handleChange('password')}
              />
            </form>
          </Grid>
          <Grid item xs={6}>
            <Button variant='outlined' onClick={this.login} color='primary'>
              LOGIN
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='outlined' color='secondary' onClick={this.goBack}>
              BACK
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Login);
