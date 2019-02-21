import  React from 'react';
import {Button, Form, InputGroup } from 'reactstrap';
import Modal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import { Auth } from 'aws-amplify';

export interface UserProfileLoginProps {

}
 
export interface UserProfileLoginState {
    modal: boolean,
    errorFeedback: string,
    credentials : {
        email: string,
        password : string
    }
}
 
// This componenet will build a login modal that displays when clicked
class LoginButton extends React.Component<UserProfileLoginProps, UserProfileLoginState> {
    constructor (props: UserProfileLoginProps) {
        super(props);
        this.state = {
            modal: false,
            errorFeedback : '',
            credentials : {
                email: '',
                password:''
            }
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            ...prevState, 
            modal: !prevState.modal
        }));
    }

    changeEmail = (event: any) => {
        this.setState({
            credentials:{...this.state.credentials, email : event.currentTarget.value}
        })
    }

    changePassword = (event: any) => {
        this.setState({
            credentials:{...this.state.credentials, password : event.currentTarget.value}
        })
    }

    login = async (credentials: any) => {
        try {
            const token = await Auth.signIn(credentials.email, credentials.password)
            console.log(token);
        } catch (err) {
            alert(err.mesage);
        }
    }

    render() { 
        return (  
            <React.Fragment>
                <Button color="login" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.login(this.state.credentials)}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input id="email" value={this.state.credentials.email} onChange={this.changeEmail}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input id="password" value={this.state.credentials.password} onChange={this.changePassword}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button type="submit" color="login" onClick={() => this.login(this.state.credentials)}>Log in</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}
 
export default LoginButton;