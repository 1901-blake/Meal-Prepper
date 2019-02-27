import React from "react";
import { connect } from 'react-redux';
import {IState, state } from "../../reducers";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

//takein the state from store and any function needed in action
export interface ISettingProps {
    // setting: ISettingState,
}

//change the prop intake to the interface props
export class SettingComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                Settings Component
            </div>
        )
    }
}

//uncommit this when the store has info
const mapStateToProps = (state: IState) => {
    return {
        // setting: state.setting
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingComponent);