import React from "react";
import LGLogo from '../../assets/large-logo.png';
import SignInButton from "../AuthComponents/SignInButton/SignInButton";
import { IState } from "../../reducers";
import { connect } from "react-redux";

export interface HomeComponentProps {
  isLoggedIn : boolean
}
 
export interface HomeComponentState {
  
}

class HomeComponent extends React.Component<HomeComponentProps, HomeComponentState> {

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="bg">
          <div id="locator">
            <h1 className="display-1 font-italic">Welcome to Prepper!</h1>
          </div>
          <div>
            <img src={LGLogo} className="locater-img"/>
          </div>
        </div>
      )
    } else {
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
}

const mapStateToProps = (state: IState) => {
  return {
    isLoggedIn : state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(HomeComponent);