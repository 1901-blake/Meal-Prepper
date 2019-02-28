import React from "react";
import { IEnterNewRecipeState, IState } from "../../reducers";
import { addIngredient, updateAmount, updateIngredient, updateMeasure } from "../../Actions/EnterNewRecipe.action";
import { connect } from "react-redux";
import { Measure } from "../../Model/Measure";
import { Ingredient } from "../../Model/Ingredient";


interface IEnterNewRecipeProps {
    newRecipe: IEnterNewRecipeState,
    addIngredient: (amount: number, measure: Measure, ingredient: Ingredient) => void, 
    updateAmount: (event) => void, 
    updateMeasure: (event) => void, 
    updateIngredient: (event) => void,
    
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
                            <input type="text" className="form-control" id="recipeName" placeholder="Recipe Name" required />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="recipeDescription">Description</label>
                            <input type="text" className="form-control" id="recipeDescription" placeholder="Description" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipeInstructions">Instructions</label>
                        <textarea className="form-control" id="recipeInstructions" cols={8} rows={10} placeholder="Enter recipe instructions/steps here:" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger mr-1">Submit Recipe</button>
                    <button type="reset" className="btn btn-secondary mr-1">Reset</button>
                    <button type="button" className="btn btn-success" onClick={() => this.props.addIngredient(this.props.newRecipe.amount, this.props.newRecipe.measure, 
                        this.props.newRecipe.ingredient)} >Add Ingredient</button>

                    <div className="form-row" id="container">
                        <div className="form-group col-md-1">
                            <label htmlFor="ingredientAmount">Ingredient Amount</label>
                            <input type="number" className="form-control" id="ingredientAmount" onChange={() => this.props.updateAmount(event)} required />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="unitOfMeasure">Unit of Measure</label>
                            <select id="unitOfMeasure" className="form-control" onChange={() => this.props.updateMeasure(event)}>
                                <option selected>Choose...</option>
                                <option>Can</option>
                                <option>Cup</option>
                                <option>Each</option>
                                <option>Gallon</option>
                                <option>Gram</option>
                                <option>Liter</option>
                                <option>Milliliter</option>
                                <option>Ounce</option>
                                <option>Package</option>
                                <option>Pint</option>
                                <option>Pound</option>
                                <option>Quart</option>
                                <option>Stick</option>
                                <option>Tablespoon</option>
                                <option>Teaspoon</option>
                                <option>To Taste</option>
                            </select>
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
                                        <td>{ele.rTuple[0]}</td>
                                        <td>{ele.rTuple[1]}</td>
                                        <td>{ele.rTuple[2]}</td>
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
    updateMeasure
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterNewRecipeComponent);