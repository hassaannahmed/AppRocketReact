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
      borderColor: '#FE8A4D',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
  input: {
    color: '#FE8A4D',
  },
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  register = (e) => {
    e.preventDefault();
    //this.props.joinChat();
    const { username, password } = this.props.state;
    const body = { username, password };
    axios
      .post('https://approcket-backend.herokuapp.com/api/users/', body)
      .then((res) => {
        console.log(res.data);
        if (res.data.msg == 'User Created') {
          this.setState({ open: true });
        }
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
          <Alert severity='success'>User Created!</Alert>
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
            <Button
              variant='outlined'
              color='secondary'
              onClick={this.register}
            >
              REGISTER
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='outlined' color='primary' onClick={this.goBack}>
              BACK
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
