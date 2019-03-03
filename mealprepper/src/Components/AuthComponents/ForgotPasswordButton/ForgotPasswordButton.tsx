import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';

export interface ForgotPasswordButtonProps {
    className? : string,
    color? : string
}
 
export interface ForgotPasswordButtonState {
    modal : boolean,
    email : string,
    confirmationCode : string,
    newPassword : string,
    confirmPassword : string,
    regex : {
        minimum : RegExp
    },
    showPassTip : boolean,
    emailProgressIsHidden : boolean,
    passwordProgressIsHidden : boolean
}
 
class ForgotPasswordButton extends React.Component<ForgotPasswordButtonProps, ForgotPasswordButtonState> {
    constructor(props: ForgotPasswordButtonProps) {
        super(props);
        this.state = { 
            modal : false,
            email : '',
            confirmationCode : '',
            newPassword : '',
            confirmPassword : '',
            regex : {
                minimum : new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
            },
            showPassTip : false,
            emailProgressIsHidden : true,
            passwordProgressIsHidden : true
         };
    }

    toggle = () => {
        this.setState({
            modal : !this.state.modal,
            email : '',
            confirmationCode : '',
            newPassword : '',
            confirmPassword : '',
            showPassTip : false,
            emailProgressIsHidden : true,
            passwordProgressIsHidden : true
        })
    }

    changeEmail = (event: any) => {
        this.setState({
            email : event.currentTarget.value
        });
    }

    changeConfirmationCode = (event: any) => {
        this.setState({
            confirmationCode : event.currentTarget.value
        });
    }

    changeNewPassword = (event: any) => {
        if (this.state.regex.minimum.test(event.currentTarget.value)){
            this.setState({
                newPassword : event.currentTarget.value,
                showPassTip : false
            })
        } else {
            this.setState({
                newPassword : event.currentTarget.value,
                showPassTip : true
            })
        }
    }

    changeConfirmPassword = (event: any) => {
        this.setState({
            confirmPassword : event.currentTarget.value
        })
    }

    sendEmail = async (email : string) => {
        try {
            this.setState({emailProgressIsHidden : false});
            const data = await Auth.forgotPassword(email);
            this.setState({emailProgressIsHidden : true});
            toast('Email sent.');
        } catch (err) {
            this.setState({emailProgressIsHidden : true});
            if (err.message) {
                toast(`Email failed to send. ${err.message}`);
            } else {
                toast(`Email failed to send. ${err}`);
            }
        }
    }

    renderPassTipLabel = () => {
        if(this.state.showPassTip) {
            return (
                <Label className="text-danger" size="sm">Passwords are required to have at least one capital letter, lowercase letter, number, and special character !@#$%^&* and must be at least 8 characters long</Label>
            )
        } else {
            return;
        }
    }

    changePassword = async(email: string, code: string, newPassword: string) => {
        try {
            this.setState({passwordProgressIsHidden : false});
            const data = await Auth.forgotPasswordSubmit(email, code, newPassword);
            this.setState({passwordProgressIsHidden : true});
            toast("Successfully changed password.")
            this.toggle();
        } catch (err) {
            this.setState({passwordProgressIsHidden : true});
            if (err.message) {
                toast(`Failed to change password.\n${err.message}`)
            } else {
                toast(`Failed to change password.\n${err}`)
            }
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <Button color={this.props.color} className={this.props.className}
                onClick={this.toggle}>Forgot Password</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Forgot Password
                    </ModalHeader>
                    <ModalBody>
                        <Label>Email</Label>
                        <Form inline>
                            <FormGroup >
                                <Input id="email" type="text" placeholder="Email"
                                value={this.state.email} onChange={this.changeEmail} />
                                <Button color={this.props.color} className={this.props.className}
                                onClick={() => this.sendEmail(this.state.email)}>Send Recovery Email</Button>
                                <CircularProgress hidden={this.state.emailProgressIsHidden} className="p-2"/>
                            </FormGroup>
                        </Form>
                        <Form>
                            <FormGroup>
                                <Label>Confirmation Code</Label>
                                <Input type="text" id="confirmationCode" placeholder="Confirmation Code"
                                value={this.state.confirmationCode} onChange={this.changeConfirmationCode}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>New Password</Label>
                                <Input type="password" id="newPassword" placeholder="Password"
                                value={this.state.newPassword} onChange={this.changeNewPassword} />
                                {this.renderPassTipLabel()}
                            </FormGroup>
                            <FormGroup>
                                <Label>Confrim Password </Label>
                                <Input type="password" id="confirmPassword" placeholder="Confirm Password"
                                value={this.state.confirmPassword} onChange={this.changeConfirmPassword} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button color={this.props.color} className={this.props.className}
                        disabled={(this.state.newPassword !== this.state.confirmPassword 
                            || this.state.newPassword === '' 
                            || this.state.confirmPassword === ''
                            || !this.state.regex.minimum.test(this.state.newPassword))}
                        onClick={() => this.changePassword(this.state.email, this.state.confirmationCode, this.state.newPassword)}
                        >Change Password</Button>
                        <CircularProgress hidden={this.state.passwordProgressIsHidden} />
                    </ModalFooter>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default ForgotPasswordButton;