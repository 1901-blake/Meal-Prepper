import { Auth } from 'aws-amplify';
import React from 'react';
import { Button, Form } from 'reactstrap';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import Modal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { IState } from '../../../reducers';
import { login } from '../../../Actions/AuthActions'
import ForgotPasswordButton from '../ForgotPasswordButton/ForgotPasswordButton';

export interface SignInButtonProps {
    className? : string,
    color? : string,
    login : () => void
}
 
export interface SignInButtonState {
    modal: boolean,
    errorFeedback: string,
    credentials : {
        email: string,
        password : string
    },
    progressIsHidden : boolean
}
 
// This componenet will build a signIn modal that displays when clicked
class SignInButton extends React.Component<SignInButtonProps, SignInButtonState> {
    constructor (props: SignInButtonProps) {
        super(props);
        this.state = {
            modal: false,
            errorFeedback : '',
            credentials : {
                email: '',
                password:''
            },
            progressIsHidden : true
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            errorFeedback : '',
            credentials : {
                email: '',
                password:''
            },
            progressIsHidden : true
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

    signIn = async (credentials: any) => {
        try {
            this.setState({progressIsHidden : false});
            const data = await Auth.signIn(credentials.email, credentials.password);
            this.setState({progressIsHidden : true});
            toast('Successfully logged in.');
            this.props.login();
            this.toggle();
        } catch (err) {
            this.setState({progressIsHidden : true});
            toast(`Failed to log in. \n${err.message}`);
        }
    }

    render() { 
        return (  
            <React.Fragment>
                <Button color={this.props.color} className={this.props.className} 
                onClick={this.toggle}>Sign In</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Sign In
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.signIn(this.state.credentials)}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" id="email" 
                                value={this.state.credentials.email} placeholder="Email" onChange={this.updateEmail}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" id="password" 
                                value={this.state.credentials.password} placeholder="Password" onChange={this.updatePassword}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button type="submit" color={this.props.color} className={this.props.className}
                        onClick={() => this.signIn(this.state.credentials)}>Sign in</Button>
                        <ForgotPasswordButton color={this.props.color} className={this.props.className} />
                        <CircularProgress hidden={this.state.progressIsHidden}/>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
    }
}

const mapDispatchToProps = {
    login
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);