import React from "react";
import { connect } from 'react-redux';
import { IState, state, IUserInfoState } from "../../reducers";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { updateEmail, updateUsername, updateFirstName, updateLastName, setInitial, handleSubmit } from "../../Actions/UserInfo.action";


//takein the state from store and any function needed in action
interface IUserInfoProps {
    userinfo: IUserInfoState,
    updateEmail: (event) => void,
    updateUsername: (event) => void,
    updateFirstName: (event) => void,
    updateLastName: (event) => void, 
    setInitial: () => Promise<void>, 
    handleSubmit: (event, username: string, firstname: string, lastname: string, email: string) => Promise<void>
}

//change the prop intake to the interface props and also change the class name if copied and paste
export class UserInfoComponent extends React.Component<IUserInfoProps, any> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setInitial()
    }

    render() {
        return (
            <div>
                <h1 className="update-profile-heading">Update Profile Information</h1>
                <div className="user-info-class">
                    <Form className="update-profile-form">
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="name" placeholder="First Name" value={this.props.userinfo.firstname} onChange={() => this.props.updateFirstName(event)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="name" placeholder="Last Name" value={this.props.userinfo.lastname} onChange={() => this.props.updateLastName(event)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userEmail">Email</Label>
                            <Input type="email" name="email" placeholder="email@example.com" value={this.props.userinfo.email} onChange={() => this.props.updateEmail(event)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" placeholder="Username" value={this.props.userinfo.username} onChange={() => this.props.updateUsername(event)} />
                        </FormGroup>
                        <Button onClick={() => this.props.handleSubmit(event, this.props.userinfo.username, this.props.userinfo.firstname, this.props.userinfo.lastname, 
                            this.props.userinfo.email)}>Update</Button>
                    </Form>
                    {this.props.userinfo.feedback}
                </div>
            </div>
        )
    }
}

//uncommit this when the store has info for the current component
const mapStateToProps = (state: IState) => {
    return {
        userinfo: state.userinfo
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    updateEmail,
    updateUsername,
    updateFirstName,
    updateLastName, 
    setInitial, 
    handleSubmit
}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent);