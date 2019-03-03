import React from "react";
import { connect } from 'react-redux';
import { IState, IWeeklyViewState } from "../../reducers";
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
import { Redirect } from "react-router";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalFooter from "reactstrap/lib/ModalFooter";

//takein the state from store and any function needed in action
export interface IWeeklyViewProps {
    weeklyview: IWeeklyViewState,
    isLoggedIn : boolean,
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
    replaceCard = (event: any) => {

    }
    render() {
        if (this.props.isLoggedIn) {
            return (
                <React.Fragment>
                    <div className="bg">
                        <div className="weekly-scroller">
                                {
                                    this.props.weeklyview.weeklyrecipe.map((r, index) => (
                                        <Card className="weekly-div-card" onClick={this.toggleModol.bind(this, r)} id={`${index}`}>
                                            <CardImg top width="100%" height="50%" src={Tomato} />
                                            <Button color="weekly-delete" className="ml-auto"
                                            onClick={this.replaceCard}> X </Button>
                                            <CardBody className="too-much-text">
                                                <CardTitle>{r.name}</CardTitle>
                                                <CardText>{r.description}</CardText>
                                            </CardBody>
                                        </Card>
                                    ))
                                }
                        </div>
                    </div>
                    <Modal isOpen={this.state.modalebool} toggle={this.toggleModol}>
                        <ModalHeader>
                            <Button onClick={this.toggleModol.bind(this, this.state.dailyview)}> X </Button>
                        </ModalHeader>
                        <ModalBody>
                            <p>{this.state.dailyview.recipe_id}</p>
                            <p>{this.state.dailyview.name}</p>
                            <p>{this.state.dailyview.description}</p>
                            <p>{this.state.dailyview.instructions}</p>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            )
        } else {
            return (
                <Redirect to='/' />
            );
        }
    }
}

//uncommit this when the store has info for the current component
const mapStateToProps = (state: IState) => {
    return {
        weeklyview: state.weeklyview,
        isLoggedIn : state.auth.isLoggedIn
    }
}
//add function when added in setting.action
const mapDispatchToProps = {
    loadWeeklyPlan
}

//change the component if you copied and paste
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyViewComponent);