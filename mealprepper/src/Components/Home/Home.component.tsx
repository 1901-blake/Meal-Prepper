import React from 'react';
import SignInButton from '../AuthComponents/SignInButton/SignInButton';
import LGLogo from '../../assets/large-logo.png'

export class HomeComponent extends React.Component {

  render() {
    return (
      <div className="bg jumbotron">
        <div id="locator">
          <h1 className="display-1 font-italic">Welcome to Prepper!</h1>
          {/* <SignInButton/> */}
        </div>
        <div>
            <img src={LGLogo} className="locater-img"/>
          </div>
      </div>
    )
  }
}