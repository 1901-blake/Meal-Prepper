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
                <div>
                    <div className="generat-meal-table">
                        <Table>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Recipe Name</td>
                                    <td>Description</td>
                                    <td>Instructions</td>
                                    <td>Amount</td>
                                    <td>Measure</td>
                                    <td>Ingredient</td>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.generate.mealPlan.map(meal => (
                                <tr key={meal.id}>
                                    <td>{meal.id}</td>
                                    <td>{meal.name}</td>
                                    <td>{meal.description}</td>
                                    <td>{meal.instructions}</td>
                                    <td>{meal.ingredients.map(ele => (
                                        <pre>{ele.amount}</pre>
                                    ))}</td>
                                    <td>{meal.ingredients.map(ele => (
                                        <pre>{ele.measure.name}</pre>
                                    ))}</td>
                                    <td>{meal.ingredients.map(ele => (
                                            <pre>{ele.ingredient.name}</pre>
                                    ))}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        <Button>Submit</Button>
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