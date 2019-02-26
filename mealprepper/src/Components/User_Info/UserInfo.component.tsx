import React from "react";
import { connect } from 'react-redux';
import { IState, state } from "../../reducers";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


//takein the state from store and any function needed in action
export interface IUserInfoProps {
    // userinfo: IUserInfoState,
}

//change the prop intake to the interface props and also change the class name if copied and paste
export class UserInfoComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <div>
            
        </div>
        )
    }
}

//uncommit this when the store has info for the current component
const mapStateToProps = (state: IState) => {
    return {
        // userinfo: state.userinfo
    }
}
//add function when added in setting.action
const mapDispatchToProps = {

}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent);