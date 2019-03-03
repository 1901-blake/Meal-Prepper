import React from "react";
import { IState, IGenerateMealPlanState } from "../../reducers";
import { connect } from "react-redux";
import { saveRecipes, generateBreakfast, generateLunch, generateDinner, generateDessert } from "../../Actions/GenerateMealPlan.action";
import Table from "reactstrap/lib/Table";
import Button from "reactstrap/lib/Button";
import { Redirect } from "react-router";
import { FullRecipe } from "../../Model/FullRecipe";


interface IGenerateMealPlanProps {
    generate: IGenerateMealPlanState,
    isLoggedIn: boolean,
    generateBreakfast: () => Promise<void>,
    generateLunch: () => Promise<void>,
    generateDinner: () => Promise<void>,
    generateDessert: () => Promise<void>,
    saveRecipes: (event, recipes: IGenerateMealPlanState) => Promise<void>
}

export class GenerateMealPlanComponent extends React.Component<IGenerateMealPlanProps, any> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.generateBreakfast();
        this.props.generateLunch();
        this.props.generateDinner();
        this.props.generateDessert();
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
                                <tbody>
                                    <tr>
                                        <th>Breakfast</th>
                                        {this.props.generate.breakfast.map(meal => (
                                            <td>{meal.name}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <th>Lunch</th>
                                        {this.props.generate.lunch.map(meal => (
                                            <td>{meal.name}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <th>Dinner</th>
                                        {this.props.generate.dinner.map(meal => (
                                            <td>{meal.name}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <th>Dessert</th>
                                        {this.props.generate.dessert.map(meal => (
                                            <td>{meal.name}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </Table>
                            <Button onClick={() => this.props.saveRecipes(event, this.props.generate)}>Save</Button>
                            <Button onClick={() => this.props.generateBreakfast() && this.props.generateLunch() && this.props.generateDinner()
                                && this.props.generateDessert()}>Regenerate</Button><br />
                            {this.props.generate.status}
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
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = {
    generateBreakfast,
    generateLunch,
    generateDinner,
    generateDessert,
    saveRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateMealPlanComponent);