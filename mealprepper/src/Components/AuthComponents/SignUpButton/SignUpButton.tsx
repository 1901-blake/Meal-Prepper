import * as React from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import { Auth } from 'aws-amplify';

export interface SignupButtonProps {
    className? : string,
    color? : string
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
    },
    regex : {
        minimum : RegExp;
    },
    showPassTip : boolean
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
            },
            regex : {
                minimum :new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
            },
            showPassTip:false
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
            },
            showPassTip : false
        }));
    }

    updateEmail = (event: any) => {
        this.setState({
            credentials:{...this.state.credentials, email : event.currentTarget.value}
        })
    }

    updatePassword = (event: any) => {
        if (this.state.regex.minimum.test(event.currentTarget.value)){
            // Password is good enough.
            this.setState({
                credentials:{...this.state.credentials, password  : event.currentTarget.value},
                showPassTip : false
            })
        } else {
            // Password isn't good enough.
            this.setState({
                credentials:{...this.state.credentials, password  : event.currentTarget.value},
                showPassTip : true
            })
        }
        
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
            this.toggle();
        } catch (err) {
            console.log(err);
        }
    }

    renderPassTipLabel = () => {
        console.log(`showPassTip: ${this.state.showPassTip}`)
        if(this.state.showPassTip) {
            console.log('Render password advice.')
            return (
                <Label className="text-danger" size="sm">Passwords are required to have at least one capital letter, lowercase letter, number, and special character !@#$%^&* and must be at least 8 characters long</Label>
            )
        } else {
            return;
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <Button color={this.props.color} className={this.props.className}
                onClick={this.toggle}>Sign Up</Button>
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
                                 {this.renderPassTipLabel()}
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPasswordInput">Confirm Password</Label>
                                <Input type="password" name="confirmPasswordInput" id="confirmPassword" placeholder="Confirm Password"
                                 value={this.state.credentials.confirmPassword} onChange={this.updateConfirmPassword} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button color={this.props.color} className={this.props.className}
                        onClick={() => this.signUp(this.state.credentials)}
                        disabled={(this.state.credentials.password !== this.state.credentials.confirmPassword 
                            || this.state.credentials.password === '' 
                            || this.state.credentials.confirmPassword === ''
                            || !this.state.regex.minimum.test(this.state.credentials.password))}>Sign Up</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>

         );
    }
}
 
export default SignUpButton;