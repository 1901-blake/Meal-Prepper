import React from "react";
import { connect } from 'react-redux';
import { IState, state, IWeeklyViewState } from "../../reducers";
import Modal from 'react-modal';
import { loadWeeklyPlan } from "../../Actions/WeeklyView.action";
import { Recipe } from "../../Model/Recipe";
import Tomato from "../../assets/Tomato.jpeg"
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";
import CardText from "reactstrap/lib/CardText";
import CardBody from "reactstrap/lib/CardBody";
import CardImg from "reactstrap/lib/CardImg";


const divStyle = {
    

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
                <div className="weekly-scroller">
                        {
                            this.props.weeklyview.weeklyrecipe.map((r) => (
                                <Card className="weekly-div-card" onClick={this.toggleModol.bind(this, r)}>
                                    <CardImg top width="100%" height="50%" src={Tomato} />
                                    <Button color="weekly-delete" className="ml-auto">X</Button>
                                    <CardBody className="too-much-text">
                                        <CardTitle>{r.name}</CardTitle>
                                        <CardText>{r.description}</CardText>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    <div>
                        <Modal isOpen={this.state.modalebool} className="Modalstyle" onRequestClose={this.toggleModol}>
                            <button onClick={this.toggleModol.bind(this, this.state.dailyview)}> X </button>
                            <p>{this.state.dailyview.recipe_id}</p>
                            <p>{this.state.dailyview.name}</p>
                            <p>{this.state.dailyview.description}</p>
                            <p>{this.state.dailyview.instructions}</p>
                        </Modal>
                    </div>
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