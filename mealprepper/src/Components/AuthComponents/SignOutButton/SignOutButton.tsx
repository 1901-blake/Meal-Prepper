import { Auth } from "aws-amplify";
import * as React from 'react';
import Button from "reactstrap/lib/Button";
import { toast } from "react-toastify";
import { IState } from "../../../reducers";
import {logout } from '../../../Actions/AuthActions'
import { connect } from "react-redux";

export interface SignOutButtonProps {
    className? : string,
    color? : string,
    logout : () => void
}
 
export interface SignOutButtonState {
    
}
 
class SignOutButton extends React.Component<SignOutButtonProps, SignOutButtonState> {
    signout = async () => {
        try {
            const data = await Auth.signOut();
            toast('Successfully signed out.');
            this.props.logout();
        } catch (err) {
            if (err.message) {
                toast(`Failed to log out.\n${err.message}`);
            } else {
                toast(`Failed to log out.\n${err}`);

            }
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <Button color={this.props.color} className={this.props.className}
                onClick={this.signout}>Sign Out</Button>
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = (state: IState) => {
    return {}
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton);
