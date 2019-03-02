import React from "react";
import LGLogo from '../../assets/large-logo.png';
import SignInButton from "../AuthComponents/SignInButton/SignInButton";

export class HomeComponent extends React.Component {

  render() {
    return (
      <div className="bg">
        <div id="locator">
          <h1 className="display-1 font-italic">Welcome to Prepper!</h1>
          <SignInButton/>
        </div>
        <div>
          <img src={LGLogo} className="locater-img"/>
        </div>
      </div>
    )
  }
}