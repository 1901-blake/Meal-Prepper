import React from "react";
import { IState, IGenerateMealPlanState } from "../../reducers";
import { connect } from "react-redux";
import { generateRecipes } from "../../Actions/GenerateMealPlan.action";
import Table from "reactstrap/lib/Table";
import Button from "reactstrap/lib/Button";
import { Redirect } from "react-router";


interface IGenerateMealPlanProps {
    generate: IGenerateMealPlanState,
    isLoggedIn : boolean,
    generateRecipes: () => Promise<void>
}

export class GenerateMealPlanComponent extends React.Component<IGenerateMealPlanProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.generateRecipes();
    }

    render() {
      if (this.props.isLoggedIn) {
            return (
                <div className="bg">
                    <div className="large-table">
                        <div className="generat-meal-table">
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Sunday</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <th>Breakfast</th>
                                        <td>Meal 1</td>
                                        <td>Meal 2</td>
                                        <td>Meal 3</td>
                                        <td>Meal 4</td>
                                        <td>Meal 5</td>
                                        <td>Meal 6</td>
                                        <td>Meal 7</td>
                                    </tr>
                                    <tr>
                                        <th>Lunch</th>
                                        <td>Meal 1</td>
                                        <td>Meal 2</td>
                                        <td>Meal 3</td>
                                        <td>Meal 4</td>
                                        <td>Meal 5</td>
                                        <td>Meal 6</td>
                                        <td>Meal 7</td>
                                    </tr>
                                    <tr>
                                        <th>Dinner</th>
                                        <td>Meal 1</td>
                                        <td>Meal 2</td>
                                        <td>Meal 3</td>
                                        <td>Meal 4</td>
                                        <td>Meal 5</td>
                                        <td>Meal 6</td>
                                        <td>Meal 7</td>
                                    </tr>
                                    <tr>
                                        <th>Dessert</th>
                                        <td>Meal 1</td>
                                        <td>Meal 2</td>
                                        <td>Meal 3</td>
                                        <td>Meal 4</td>
                                        <td>Meal 5</td>
                                        <td>Meal 6</td>
                                        <td>Meal 7</td>
                                    </tr>
                                </tbody>        
                            </Table>
                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to='/' />
            );
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        generate: state.generate,
        isLoggedIn : state.auth.isLoggedIn
    }
}

const mapDispatchToProps = {
    generateRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateMealPlanComponent);