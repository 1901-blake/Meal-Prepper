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

export interface ForgotPasswordButtonProps {
    className? : string,
    color? : string
}
 
export interface ForgotPasswordButtonState {
    modal : boolean,
    email : string,
    confirmationCode : string,
    newPassword : string,
    confirmPassword : string
    concreteEmail : string
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
            concreteEmail : ''
         };
    }

    toggle = () => {
        this.setState({
            modal : !this.state.modal,
            email : '',
            confirmationCode : '',
            newPassword : '',
            confirmPassword : ''
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
        this.setState({
            newPassword : event.currentTarget.value
        })
    }

    changeConfirmPassword = (event: any) => {
        this.setState({
            confirmPassword : event.currentTarget.value
        })
    }

    sendEmail = async (email : string) => {
        try {
            const data = await Auth.forgotPassword(email);
            this.setState({
                concreteEmail : this.state.email
            });
        } catch (err) {
            console.log(err);
        }
    }

    changePassword = async(email: string, code: string, newPassword: string) => {
        try {
            const data = await Auth.forgotPasswordSubmit(email, code, newPassword);
            console.log(data);
            this.toggle();
        } catch (err) {
            console.log(err);
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
                                <Button color="forogt-password" onClick={() => this.sendEmail(this.state.email)}>Send Recovery Email</Button>
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
                            || this.state.confirmPassword === '')}
                        onClick={() => this.changePassword(this.state.concreteEmail, this.state.confirmationCode, this.state.newPassword)}
                        >Change Password</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default ForgotPasswordButton;