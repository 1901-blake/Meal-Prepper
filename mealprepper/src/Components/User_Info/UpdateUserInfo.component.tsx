import React from "react";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";


export class UpdateUserInfoComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="update-profile-heading">Update Profile Information</h1>
                <div className="user-info-class">
                    <Form className="update-profile-form">
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="name" placeholder="First Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="name" placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userEmail">Email</Label>
                            <Input type="email" name="email" placeholder="email@example.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" placeholder="Username" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}