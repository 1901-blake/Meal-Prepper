import React from "react";
import { connect } from 'react-redux';
import { IState, state } from "../../reducers";
import Alert from "reactstrap/lib/Alert";
import Modal from 'react-modal';


const divStyle = {
    // zoom: 1,
    //display: 'inline',

    row: {
        display: 'flex',
    },
    card: {
        maxWidth: '275px',
        height: '675px',

        border: '2px solid black',

        backgroundColor: '#f1f1f1',
        margin: '3px',
    },

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
            modalebool: false
        }
    }

    toggleModol = (event) => {
        this.setState({ modalebool: !this.state.modalebool });

        console.log('you clciked on me hip hip horaay');
    }

    render() {
        return (
            <div>

                <div style={divStyle.row}>
                    {/* need to get the selected */}
                    <div style={divStyle.card} onClick={this.toggleModol}>
                        <h3>first card</h3>
                        <p>this is a paragragh to test the width of the card)</p>



                    </div>

                    <div style={divStyle.card}>
                        <h3>second card</h3>
                    </div>

                    <div style={divStyle.card}>
                        <h3>third card</h3>
                    </div>
                </div>
                <Modal isOpen={this.state.modalebool} onRequestClose={this.toggleModol}>
                    <button onClick={this.toggleModol}> X </button>
                    Hello from modal
                    </Modal>
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