import React from "react";
import { connect } from 'react-redux';
import {IState, state } from "../../reducers";

const divStyle = {
    margin: '40px',
    border: '3px solid pink',
};

//takein the state from store and any function needed in action
export interface IAboutProps {
    // about: IAboutState,
}

//change the prop intake to the interface props and also change the class name if copied and paste
export class AboutComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                About Component
            </div>
        )
    }
}

//uncommit this when the store has info for the current component
const mapStateToProps = (state: IState) => {
    return {
        // about: state.about
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    
}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);