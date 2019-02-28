import * as React from 'react';
import { Button, Modal, ModalHeader, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';

export interface ChangePasswordButtonProps {
    className? : string,
    color? : string
}
 
export interface ChangePasswordButtonState {
    modal : boolean,
    oldPassword : string,
    newPassword : string,
    confirmPassword : string,
    regex : {
        minimum : RegExp
    },
    showPassTip : boolean,
    progressIsHidden : boolean
}
 
class ChangePasswordButton extends React.Component<ChangePasswordButtonProps, ChangePasswordButtonState> {
    constructor (props: ChangePasswordButtonProps){
        super (props);
        this.state = {
            modal : false,
            oldPassword : '',
            newPassword : '',
            confirmPassword : '',
            regex : {
                minimum : new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
            },
            showPassTip : false,
            progressIsHidden : true
        }
    }
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            oldPassword : '',
            newPassword : '',
            confirmPassword : '',
            showPassTip : false,
            progressIsHidden : true
        }));
    }

    updateOldPassword = (event: any) => {
        this.setState({
            oldPassword : event.currentTarget.value
        });
    }

    updateNewPassword = (event: any) => {
        if (this.state.regex.minimum.test(event.currentTarget.value)){
            this.setState({
                newPassword : event.currentTarget.value,
                showPassTip : false
            });
        } else {
            this.setState({
                newPassword : event.currentTarget.value,
                showPassTip : true
            });
        }
    }

    updateConfirmPassword = (event: any) => {
        this.setState({
            confirmPassword : event.currentTarget.value
        });
    }

    changePassword = async (oldPassword: string, newPassword: string) => {
        try {
            this.setState({progressIsHidden : false});
            const user = await Auth.currentAuthenticatedUser();
            const data = await Auth.changePassword(user, oldPassword, newPassword);
            this.setState({progressIsHidden : true});
            toast('Successfully changed password.')
            this.toggle();
        } catch (err) {
            this.setState({progressIsHidden : true});
            if(err.message) {
                toast(`Failed to change password.\n${err.message}`)
            } else {
                toast(`Failed to change password.\n${err}`)
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
    
    render() { 
        return ( 
            <React.Fragment>
                <Button color={this.props.color} className={this.props.className}
                onClick={this.toggle}>Change Password</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Sign In
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.changePassword(this.state.oldPassword, this.state.newPassword)}>
                            <FormGroup>
                                <Label>Old Password</Label>
                                <Input type="password" id="oldPassword" 
                                value={this.state.oldPassword} placeholder="Old Password" onChange={this.updateOldPassword}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>New Password</Label>
                                <Input type="password" id="newPassword" 
                                value={this.state.newPassword} placeholder="New Password" onChange={this.updateNewPassword}/>
                                {this.renderPassTipLabel()}
                            </FormGroup>
                            <FormGroup>
                                <Label>Confirm Password</Label>
                                <Input type="password" id="confirmPassword" 
                                value={this.state.confirmPassword} placeholder="Confirm Password" onChange={this.updateConfirmPassword}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="justify-content-center">
                        <Button type="submit" color={this.props.color} className={this.props.className} 
                        disabled={(this.state.newPassword !== this.state.confirmPassword 
                            || this.state.newPassword === '' 
                            || this.state.confirmPassword === ''
                            || !this.state.regex.minimum.test(this.state.newPassword))}
                        onClick={() => this.changePassword(this.state.oldPassword, this.state.newPassword)}>Change Password</Button>
                        <CircularProgress hidden={this.state.progressIsHidden} />
                    </ModalFooter>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default ChangePasswordButton;