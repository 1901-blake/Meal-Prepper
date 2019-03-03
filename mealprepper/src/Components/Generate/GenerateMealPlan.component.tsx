import React from "react";
import { IState, IGenerateMealPlanState } from "../../reducers";
import { connect } from "react-redux";
import { generateRecipes, saveRecipes } from "../../Actions/GenerateMealPlan.action";
import Table from "reactstrap/lib/Table";
import Button from "reactstrap/lib/Button";
<<<<<<< HEAD
import { FullRecipe } from "../../Model/FullRecipe";
=======
import { Redirect } from "react-router";
>>>>>>> 66e5f92131936abfb676edd9283c4aa3399d9737


interface IGenerateMealPlanProps {
    generate: IGenerateMealPlanState,
<<<<<<< HEAD
    saveRecipes: (event, recipes: FullRecipe[]) => Promise<void>, 
=======
    isLoggedIn : boolean,
>>>>>>> 66e5f92131936abfb676edd9283c4aa3399d9737
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 66e5f92131936abfb676edd9283c4aa3399d9737
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
    generateRecipes, 
    saveRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateMealPlanComponent);