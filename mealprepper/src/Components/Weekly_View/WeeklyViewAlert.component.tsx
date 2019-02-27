import React from "react";
import { connect } from 'react-redux';
import { IState, state } from "../../reducers";
import Alert from "reactstrap/lib/Alert";


const divStyle = {
   

};

//takein the state from store and any function needed in action
export interface IWeeklyViewProps {
    // weeklyview: IWeeklyViewState,
}

//change the prop intake to the interface props and also change the class name if copied and paste
export class WeeklyViewComponent extends React.Component<any, any> {

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
        // weeklyview: state.weeklyview
    }
}
//add function when added in setting.action
const mapDispatchToProps = {

}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyViewComponent);