import React from "react";
import { IState, IGenerateMealPlanState } from "../../reducers";
import { connect } from "react-redux";
import { generateRecipes, saveRecipes } from "../../Actions/GenerateMealPlan.action";
import Table from "reactstrap/lib/Table";
import Button from "reactstrap/lib/Button";
import { FullRecipe } from "../../Model/FullRecipe";


interface IGenerateMealPlanProps {
    generate: IGenerateMealPlanState,
    saveRecipes: (event, recipes: FullRecipe[]) => Promise<void>, 
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
                                <td><p>{meal.instructions}</p></td>
                                <td>{meal.ingredients.map(ele => (
                                    <pre>{ele.amount}</pre>
                                ))}</td>
                                <td>{meal.ingredients.map(ele => (
                                    <pre >{ele.measure.name}</pre>
                                ))}</td>
                                <td>{meal.ingredients.map(ele => (
                                        <pre>{ele.ingredient.name}</pre>
                                ))}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <Button onClick={() => this.props.saveRecipes(event, this.props.generate.mealPlan)}>Submit</Button>
                    <Button onClick={() => this.props.generateRecipes()}>Regenerate</Button><br />
                    {this.props.generate.status}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        generate: state.generate
    }
}

const mapDispatchToProps = {
    generateRecipes, 
    saveRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateMealPlanComponent);