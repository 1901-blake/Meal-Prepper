import * as React from 'react';
import { Button, Modal, ModalHeader, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
import { Auth } from 'aws-amplify';

export interface ChangePasswordButtonProps {
    className? : string,
    color? : string
}
 
export interface ChangePasswordButtonState {
    modal : boolean,
    oldPassword : string,
    newPassword : string,
    confirmPassword : string
}
 
class ChangePasswordButton extends React.Component<ChangePasswordButtonProps, ChangePasswordButtonState> {
    constructor (props: ChangePasswordButtonProps){
        super (props);
        this.state = {
            modal : false,
            oldPassword : '',
            newPassword : '',
            confirmPassword : ''
        }
    }
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            oldPassword : '',
            newPassword : '',
            confirmPassword : ''
        }));
    }

    updateOldPassword = (event: any) => {
        this.setState({
            oldPassword : event.currentTarget.value
        });
    }

    updateNewPassword = (event: any) => {
        this.setState({
            newPassword : event.currentTarget.value
        });
    }

    updateConfirmPassword = (event: any) => {
        this.setState({
            confirmPassword : event.currentTarget.value
        });
    }

    changePassword = async (oldPassword: string, newPassword: string) => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const data = await Auth.changePassword(user, oldPassword, newPassword);
            this.toggle();
        } catch (err) {
            console.log(err);
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
                            || this.state.confirmPassword === '')}
                        onClick={() => this.changePassword(this.state.oldPassword, this.state.newPassword)}>Change Password</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default ChangePasswordButton;