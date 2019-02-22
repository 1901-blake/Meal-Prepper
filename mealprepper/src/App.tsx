import React, { Component } from 'react';
import './App.scss';
import './include/Bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Store';
import  NavComponent  from './Components/Nav/Nav.component';
import Amplify from 'aws-amplify';
import config from './config/cognito.config'

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
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <NavComponent />
            
            </div>
          </BrowserRouter>
      </Provider>             
    );
  }
}

export default App;
