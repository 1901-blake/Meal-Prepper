import React from "react";
import { connect } from 'react-redux';
import { IState, state, IWeeklyViewState } from "../../reducers";
import Modal from 'react-modal';
import { loadWeeklyPlan } from "../../Actions/WeeklyView.action";
import { Recipe } from "../../Model/Recipe";


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
    weeklyview: IWeeklyViewState,
    loadWeeklyPlan: (number) => void
}

Modal.setAppElement('#root');

//change the prop intake to the interface props and also change the class name if copied and paste
export class WeeklyViewComponent extends React.Component<IWeeklyViewProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            modalebool: false,
            dailyview: Recipe
        }
    }

    toggleModol = (selectedcard: Recipe) => {
        this.setState({ modalebool: !this.state.modalebool });

        if (selectedcard != null) {
            this.setState({ dailyview: selectedcard });
        }

    }
    componentDidMount() {
        console.log('componentDidMount loadWeeklyPlan');
        this.props.loadWeeklyPlan(0);
    }
    render() {
        return (
            <div className="bg">

                <div style={divStyle.row}>
                    {
                        this.props.weeklyview.weeklyrecipe.map((r) => (
                            <div style={divStyle.card} onClick={this.toggleModol.bind(this, r)}>
                                <h3>{r.name}</h3>
                                <p>{r.description}</p>
                            </div>
                        ))
                    }
                </div>

                <div >

                    <Modal isOpen={this.state.modalebool} className="Modalstyle" onRequestClose={this.toggleModol}>
                        <button onClick={this.toggleModol.bind(this, this.state.dailyview)}> X </button>
                        <p>{this.state.dailyview.recipe_id}</p>
                        <p>{this.state.dailyview.name}</p>
                        <p>{this.state.dailyview.description}</p>
                        <p>{this.state.dailyview.instructions}</p>
                    </Modal>
                </div>
            </div>
        )
    }
}

//uncommit this when the store has info for the current component
const mapStateToProps = (state: IState) => {
    return {
        weeklyview: state.weeklyview
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    loadWeeklyPlan
}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyViewComponent);