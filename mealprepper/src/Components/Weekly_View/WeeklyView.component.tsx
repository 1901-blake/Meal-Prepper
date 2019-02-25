import React from "react";
import { connect } from 'react-redux';
import { IState, state } from "../../reducers";

const divStyle = {
    // zoom: 1,
    //display: 'inline',

    border: '3px solid black',
    padding: '16px',
    backgroundColor: '#f1f1f1',
    // width: '100%',
    // display: 'block',
    // marginBottom: '20px',

    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    // text-align: center;

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

    addweekplan = (event) => {
    }

    render() {
        return (
            <div>
                
                {
                    <div style={divStyle}>
                        <h3>first card</h3>
                    </div>
                }

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