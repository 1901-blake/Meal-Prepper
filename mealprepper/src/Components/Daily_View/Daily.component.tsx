import React from "react";
import { connect } from 'react-redux';
import {IState, state } from "../../reducers";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

//takein the state from store and any function needed in action
export interface IDailyProps {
    // daily: IDailyState,
}

//change the prop intake to the interface props
export class DailyComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="bg">
            </div>
        )
    }
}

//uncommit this when the store has info
const mapStateToProps = (state: IState) => {
    return {
        // daily: state.daily
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    
}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(DailyComponent);