import * as React from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import { Auth } from 'aws-amplify';

export interface SignupButtonProps {
    
}
 
export interface SignupButtonState {
    modal: boolean,
    credentials : {
        username : string,
        email : string,
        firstName : string,
        lastName : string,
        password : string,
        confirmPassword : string
    }
}
 
class SignUpButton extends React.Component<SignupButtonProps, SignupButtonState> {
    constructor (props: SignupButtonProps) {
        super(props);
        this.state = {
            modal : false,
            credentials : {
                username : '',
                firstName : '',
                lastName : '',
                email : '',
                password : '',
                confirmPassword : ''
            }
        };
    }

    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            credentials : {
                username : '',
                firstName : '',
                lastName : '',
                email : '',
                password : '',
                confirmPassword : ''
            }
        }));
    }

    updateEmail = (event: any) => {
        this.setState({
            credentials:{...this.state.credentials, email : event.currentTarget.value}
        })
    }

    updatePassword = (event: any) => {
        this.setState({
            credentials:{...this.state.credentials, password  : event.currentTarget.value}
        })
    }

    updateConfirmPassword = (event: any) => {
        this.setState({
            credentials:{...this.state.credentials, confirmPassword  : event.currentTarget.value}
        })
    }

    updateUsername = (event: any) => {
        this.setState({
            credentials : {...this.state.credentials, username : event.currentTarget.value}
        })
    }

    updateFirstName = (event: any) => {
        this.setState({
            credentials : {...this.state.credentials, firstName : event.currentTarget.value}
        })
    }

    updateLastName = (event: any) => {
        this.setState({
            credentials : {...this.state.credentials, lastName : event.currentTarget.value}
        })
    }

    signUp = async (credentials: any) => {
        const info = {
            username : credentials.username,
            password : credentials.password,
            attributes : {
                email : credentials.email,
                given_name : credentials.firstName,
                family_name : credentials.lastName,
                name : credentials.username
            }
        }
        try {
            const data = await Auth.signUp(info);
            this,this.toggle();
        } catch (err) {
            console.log(err);
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <Button color="signUp" onClick={this.toggle}>Sign Up</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Sign Up
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.signUp(this.state.credentials)}>
                            <FormGroup>
                                <Label for="emailInput">Email</Label>
                                <Input type="email" name="emailInput" id="email" placeholder="email@here.com" 
                                value={this.state.credentials.email} onChange={this.updateEmail} />
                            </FormGroup>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input type="text" name="firstNameInput" id="firstName" placeholder="First Name"
                                value={this.state.credentials.firstName} onChange={this.updateFirstName} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input type="text" name="lastNameInput" input="lastName" placeholder="LastName"
                                value={this.state.credentials.lastName} onChange={this.updateLastName} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text" name="usernameInput" id="username" placeholder="Username"
                                value={this.state.credentials.username} onChange={this.updateUsername} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordInput">Password</Label>
                                <Input type="password" name="passwordInput" id="password" placeholder="Password"
                                 value={this.state.credentials.password} onChange={this.updatePassword} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPasswordInput">Confirm Password</Label>
                                <Input type="password" name="confirmPasswordInput" id="confirmPassword" placeholder="Confirm Password"
                                 value={this.state.credentials.confirmPassword} onChange={this.updateConfirmPassword} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button color="signUp" onClick={() => this.signUp(this.state.credentials)}
                        disabled={(this.state.credentials.password !== this.state.credentials.confirmPassword 
                            || this.state.credentials.password === '' 
                            || this.state.credentials.confirmPassword === '')}>Sign Up</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>

         );
    }
}
 
export default SignUpButton;