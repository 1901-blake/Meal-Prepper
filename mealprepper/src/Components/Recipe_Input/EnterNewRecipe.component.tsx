import React from "react";
import { IEnterNewRecipeState, IState } from "../../reducers";
import { addIngredient, updateAmount, updateIngredient, updateMeasure, updateRecipeName, updateInstructions, updateDescription, submitRecipe } from "../../Actions/EnterNewRecipe.action";
import { connect } from "react-redux";
import { Measure } from "../../Model/Measure";
import { Ingredient } from "../../Model/Ingredient";
import { Ingredients } from "../../Model/Ingredients";


interface IEnterNewRecipeProps {
    newRecipe: IEnterNewRecipeState,
    addIngredient: (amount: number, measure: Measure, ingredient: Ingredient) => void,
    updateAmount: (event) => void,
    updateMeasure: (event) => void,
    updateIngredient: (event) => void,
    updateRecipeName: (event) => void,
    updateInstructions: (event) => void,
    updateDescription: (event) => void,
    submitRecipe: (event, recipeName: string, description: string, instructions: string, ingredients: Ingredients[]) => Promise<void>
}

const BackgroundImagePage = () => {
    return (
        <div className="bg"></div>
    );
}

// export default BackgroundImagePage;

export class EnterNewRecipeComponent extends React.Component<IEnterNewRecipeProps, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg">
                {/* {BackgroundImagePage()} */}
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="recipeName">Recipe Name</label>
                            <input type="text" className="form-control" id="recipeName" placeholder="Recipe Name" onChange={() => this.props.updateRecipeName(event)} required />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="recipeDescription">Description</label>
                            <input type="text" className="form-control" id="recipeDescription" placeholder="Description" onChange={() => this.props.updateDescription(event)} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipeInstructions">Instructions</label>
                        <textarea className="form-control" id="recipeInstructions" cols={8} rows={10} placeholder="Enter recipe instructions/steps here:"
                            onChange={() => this.props.updateInstructions(event)} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger mr-1" onClick={() => this.props.submitRecipe(event, this.props.newRecipe.recipeName,
                        this.props.newRecipe.description, this.props.newRecipe.instructions, this.props.newRecipe.ingredArr)}>Submit Recipe</button>
                    <button type="reset" className="btn btn-secondary mr-1">Reset</button>
                    <span>{this.props.newRecipe.status}</span>
                    <button type="button" className="btn btn-success" onClick={() => this.props.addIngredient(this.props.newRecipe.amount, this.props.newRecipe.measure,
                        this.props.newRecipe.ingredient)} >Add Ingredient</button>

                    <div className="form-row" id="container">
                        <div className="form-group col-md-1">
                            <label htmlFor="ingredientAmount">Amount</label>
                            <input type="number" className="form-control" id="ingredientAmount" onChange={() => this.props.updateAmount(event)} required />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Unit of Measure:
                                <input list="measurements" id="measure-choice" name="measure-choice" />
                            </label>
                            

                                <datalist id="measurements">
                                <select>
                                    <option value="Chocolate" />
                                    <option value="Coconut" />
                                    <option value="Mint" />
                                    <option value="Strawberry" />
                                    <option value="Vanilla" />  
                                </select>
                                </datalist>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="ingredient">Ingredient</label>
                            <input type="text" className="form-control" id="ingredient" placeholder="Ingredient" onChange={() => this.props.updateIngredient(event)} required />
                        </div>
                    </div>
                </form>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Amount</th>
                                <th scope="col"> Measure</th>
                                <th scope="col">Ingredient</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.newRecipe.ingredArr.map((ele) => (
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
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        newRecipe: state.newRecipe
    }
}

const mapDispatchToProps = {
    addIngredient,
    updateAmount,
    updateIngredient,
    updateMeasure,
    updateInstructions,
    updateDescription,
    updateRecipeName,
    submitRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterNewRecipeComponent);