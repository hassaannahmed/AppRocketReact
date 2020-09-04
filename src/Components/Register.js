import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';
import { withStyles } from '@material-ui/core/styles';

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
    color: '#F48FBA',
  },
});

class Register extends Component {
  register = (e) => {
    e.preventDefault();
    this.props.joinChat();
  };
  goBack = (e) => {
    e.preventDefault();
    this.props.goBack();
  };

  render() {
    const { classes, handleChange } = this.props;
    return (
      <div>
        <Grid
          container
          direction='column'
          alignItems='center'
          justify='center'
          spacing={3}
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
              component={Link}
              to='/Register'
              variant='outlined'
              color='secondary'
              onClick={this.register}
            >
              REGISTER
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              component={Link}
              to='/Register'
              variant='outlined'
              color='primary'
              onClick={this.goBack}
            >
              BACK
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
