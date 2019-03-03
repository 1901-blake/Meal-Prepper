import React from "react";
import { connect } from 'react-redux';
import { IState, IWeeklyViewState } from "../../reducers";
import Modal from 'react-modal';
import { loadWeeklyPlan } from "../../Actions/WeeklyView.action";
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
import { FullRecipe } from "../../Model/FullRecipe";
import { Ingredients } from "../../Model/Ingredients";

//takein the state from store and any function needed in action
export interface IWeeklyViewProps {
    weeklyview: IWeeklyViewState,
    isLoggedIn : boolean,
    loadWeeklyPlan: (number) => void
}

//change the prop intake to the interface props and also change the class name if copied and paste
export class WeeklyViewComponent extends React.Component<IWeeklyViewProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            modalebool: false,
            dailyview: FullRecipe
        }
    }

    toggleModol = (selectedcard: FullRecipe) => {
        this.setState({ modalebool: !this.state.modalebool });

        if (selectedcard != null) {
            this.setState({ dailyview: selectedcard });
        }

    }
    componentDidMount() {
        this.props.loadWeeklyPlan(0);
        Modal.setAppElement('body');
    }
    replaceCard = (event: any) => {

    }
    renderIngredients = (ingredients: Ingredients[]) => {
        if (ingredients) {
            return ingredients.map((r, index) => {
                return <p>{r.amount} {r.measure.name} {r.ingredient.name}</p>
            })
        } else {
            return;
        }
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
                            <p>{this.state.dailyview.name}</p>
                            <p>{this.state.dailyview.description}</p>
                            <p>{this.state.dailyview.instructions}</p>
                            {this.renderIngredients(this.state.dailyview.ingredients)}
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