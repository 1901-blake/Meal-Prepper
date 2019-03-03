import React from "react";
import { connect } from 'react-redux';
import {IState } from "../../reducers";
import { Redirect } from "react-router";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

//takein the state from store and any function needed in action
export interface ISettingProps {
    // setting: ISettingState,
    isLoggedIn : boolean
}

//change the prop intake to the interface props
export class SettingComponent extends React.Component<ISettingProps, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className="bg">
                    Settings Component
                </div>
            )
        } else {
            return (
                <Redirect to='/'/>
            )
        }
    }
}

//uncommit this when the store has info
const mapStateToProps = (state: IState) => {
    return {
        // setting: state.setting
        isLoggedIn : state.auth.isLoggedIn
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingComponent);