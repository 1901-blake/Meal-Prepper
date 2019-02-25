import { Auth } from "aws-amplify";
import * as React from 'react';
import Button from "reactstrap/lib/Button";

export interface SignOutButtonProps {
    
}
 
export interface SignOutButtonState {
    
}
 
class SignOutButton extends React.Component<SignOutButtonProps, SignOutButtonState> {
    signout = async () => {
        try {
            const data = await Auth.signOut();
        } catch (err) {
            console.log(err);
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <Button color="signOut" onClick={this.signout}>Sign Out</Button>
            </React.Fragment>
         );
    }
}
 
export default SignOutButton;
