import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import First from './First';
import Login from './Login';
import Register from './Register';
import Chat from './Chat/Chat';

import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#90CAf9',
    },
    secondary: {
      main: '#FE8A4D',
    },
  },
});
export class MainPage extends Component {
  state = {
    page: 'first',
    username: '',
    password: '',
    id: '',
  };

  // Go To Chat
  joinChat = (id) => {
    console.log(id);

    this.setState({
      id: id,
      page: 'chat',
    });
  };

  // Go Back
  goBack = () => {
    this.setState({
      page: 'first',
    });
  };

  login = () => {
    this.setState({
      page: 'login',
    });
  };

  register = () => {
    this.setState({
      page: 'register',
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { page } = this.state;

    switch (page) {
      case 'first':
        return (
          <ThemeProvider theme={theme}>
            <First login={this.login} register={this.register} />
          </ThemeProvider>
        );
      case 'login':
        return (
          <ThemeProvider theme={theme}>
            <Login
              joinChat={this.joinChat}
              goBack={this.goBack}
              username={this.state.username}
              handleChange={this.handleChange}
              state={this.state}
            />
          </ThemeProvider>
        );
      case 'register':
        return (
          <ThemeProvider theme={theme}>
            <Register
              joinChat={this.joinChat}
              goBack={this.goBack}
              handleChange={this.handleChange}
              state={this.state}
            />
          </ThemeProvider>
        );
      case 'chat':
        return (
          <ThemeProvider theme={theme}>
            <Chat state={this.state} />
          </ThemeProvider>
        );
    }
  }
}
// const MainPage = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Grid
//         container
//         direction='column'
//         alignItems='center'
//         justify='center'
//         spacing={3}
//       >
//         <Grid item xs={12}>
//           <Button
//             component={Link}
//             to='/Register'
//             variant='outlined'
//             color='secondary'
//           >
//             Register
//           </Button>
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             component={Link}
//             to='/Login'
//             variant='outlined'
//             color='primary'
//           >
//             Login
//           </Button>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };

export default MainPage;
