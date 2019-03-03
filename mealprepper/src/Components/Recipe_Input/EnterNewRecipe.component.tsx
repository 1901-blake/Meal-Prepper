import React from "react";
import { IEnterNewRecipeState, IState } from "../../reducers";
import { addIngredient, updateAmount, updateIngredient, updateMeasure, updateRecipeName, 
    updateInstructions, updateDescription, submitRecipe, populateIngredient,
    populateMeasure } from "../../Actions/EnterNewRecipe.action";
import { connect } from "react-redux";
import { Measure } from "../../Model/Measure";
import { Ingredient } from "../../Model/Ingredient";
import { Ingredients } from "../../Model/Ingredients";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from "react-router";


interface IEnterNewRecipeProps {
    newRecipe: IEnterNewRecipeState,
    isLoggedIn : boolean,
    addIngredient: (amount: number, measure: Measure, ingredient: Ingredient) => void,
    populateIngredient: () => Promise<void>,
    populateMeasure: () => Promise<void>, 
    updateAmount: (event) => void,
    updateMeasure: (event) => void,
    updateIngredient: (event) => void,
    updateRecipeName: (event) => void,
    updateInstructions: (event) => void,
    updateDescription: (event) => void,
    submitRecipe: (event, recipeName: string, description: string, instructions: string,
        ingredients: Ingredients[]) => Promise<void>
}


export class EnterNewRecipeComponent extends React.Component<IEnterNewRecipeProps, any> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.populateIngredient();
        this.props.populateMeasure();
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className="bg">
                    <h1 className="tableHeaders">Enter New Recipe</h1>
                    <div className="user-info-class">
                    <Form className="update-profile-form">
                        <FormGroup className="form-row">
                            {/* Recipe Name */}
                            <label htmlFor="recipeName">Recipe Name</label>
                            <input type="text" className="form-control" id="recipeName" placeholder="Recipe Name"
                                onChange={() => this.props.updateRecipeName(event)} required />
                            {/* Category */}
                            <label htmlFor="recipeDescription">Category</label>
                            <div className="input-group" id="recipeDescription" onChange={() => this.props.updateDescription(event)}>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <input type="radio" name="Category" value="breakfast"/>
                                    </div>
                                </div>
                                <input type="text" disabled className="form-control" placeholder="Breakfast"/>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <input type="radio" name="Category" value="lunch-dinner"/>
                                    </div>
                                </div>
                                <input type="text" disabled className="form-control" placeholder="Lunch/Dinner"/>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <input type="radio" name="Category" value="dessert"/>
                                    </div>
                                </div>
                                <input type="text" disabled className="form-control" placeholder="Dessert"/>
                            </div>
                            {/* Instructions */}
                            <label htmlFor="recipeInstructions">Instructions</label>
                            <textarea className="form-control" id="recipeInstructions" cols={8} rows={10}
                                placeholder="Enter recipe instructions/steps here:"
                                onChange={() => this.props.updateInstructions(event)} required></textarea>
    
                            {/* Amount */}
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="ingredientAmount">Amount</label>
                                    <input type="number" className="form-control" id="ingredientAmount"
                                        onChange={() => this.props.updateAmount(event)} required />
                                </div>
    
                                {/* Unit of Measure */}
                                <div className="col">
                                    <label htmlFor="measure-choice">Unit of Measure</label>
                                        <input list="measurements" className="form-control" id="measure-choice" name="measure-choice"
                                            onChange={() => this.props.updateMeasure(event)} />
                                    <datalist id="measurements">
                                        {this.props.newRecipe.measurePop.map(ele => (
                                            <option value={ele.name} />
                                        ))}
                                    </datalist>
                                </div>
    
                                {/* Ingredient */}
                                <div className="col">
                                    <label htmlFor="ingredient-list">Ingredient</label>
                                        <input list="ingredient-list" className="form-control" onChange={() => this.props.updateIngredient(event)} />
                                    <datalist id="ingredient-list">
                                        {
                                            this.props.newRecipe.ingredientPop.map(ele => (
                                                <option value={ele.name} />
                                            ))
                                        }
                                    </datalist>
                                </div>
                            </div>
    
                            {/* Submit Button, Reset Button, Add New Ingredient Button */}
                            <div className="recEntryButtons">
                                <button type="submit" className="btn btn-danger mr-1" onClick={() =>
                                    this.props.submitRecipe(event, this.props.newRecipe.recipeName,
                                    this.props.newRecipe.description, this.props.newRecipe.instructions,
                                    this.props.newRecipe.ingredArr)}>Submit Recipe</button>
                                <button type="reset" className="btn btn-secondary mr-1">Reset</button>
                                <button type="button" className="btn btn-success" onClick={() =>
                                    this.props.addIngredient(this.props.newRecipe.amount, this.props.newRecipe.measure,
                                    this.props.newRecipe.ingredient)} >Add Ingredient</button>
                                <span color="red">{this.props.newRecipe.status}</span>
                            </div>
                        </FormGroup>
                    </Form>
                    <div>
                        <table className="table table-striped table-hover table-light">
                            <thead>
                                <tr>
                                    <th scope="col">Amount</th>
                                    <th scope="col"> Measure</th>
                                    <th scope="col">Ingredient</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.newRecipe.ingredArr.map(ele => (
                                        <tr>
                                            <td>{ele.amount}</td>
                                            <td>{ele.measure.name}</td>
                                            <td>{ele.ingredient.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            )
        } else {
            return (
                <Redirect to='/'/>
            )
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        newRecipe: state.newRecipe,
        isLoggedIn : state.auth.isLoggedIn
    }
}

const mapDispatchToProps = {
    addIngredient,
    populateIngredient,
    populateMeasure,
    updateAmount,
    updateIngredient,
    updateMeasure,
    updateInstructions,
    updateDescription,
    updateRecipeName,
    submitRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterNewRecipeComponent);