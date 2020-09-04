import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export class First extends Component {
  login = (e) => {
    e.preventDefault();
    this.props.login();
  };
  register = (e) => {
    e.preventDefault();
    this.props.register();
  };
  render() {
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
            <Button
              component={Link}
              to='/Register'
              variant='outlined'
              color='secondary'
              onClick={this.register}
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={Link}
              to='/Login'
              variant='outlined'
              color='primary'
              onClick={this.login}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default First;
