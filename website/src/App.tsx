import React, { Component } from 'react';
import './App.css';
import config from './config/cognito.config';
import Amplify from 'aws-amplify';
import LoginButton from './components/loginButton';

Amplify.configure({
  Auth : {
    mandatorySignIn : true,
    region : config.cognito.REGION,
    userPoolId : config.cognito.USER_POOL_ID,
    identityPoolId : config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId : config.cognito.APP_CLIENT_ID
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginButton />
      </div>
    );
  }
}

export default App;
