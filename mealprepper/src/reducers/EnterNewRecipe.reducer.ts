import { IEnterNewRecipeState } from ".";
import { enterNewRecipeTypes } from "../Actions/EnterNewRecipe.action";
import { Measure } from "../Model/Measure";
import { Ingredient } from "../Model/Ingredient";
import { Ingredients } from "../Model/Ingredients";


const initialState: IEnterNewRecipeState = {
    ingredArr: [],
    amount: 0,
    measure: new Measure(0, ''),
    ingredient: new Ingredient(0, ''),
    recipeName: '', 
    description: '',
    instructions: '', 
    status: 0, 
    measurePop: [], 
    ingredientPop: []
}

export const enterNewRecipeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case enterNewRecipeTypes.ADD_INGREDIENT: 
            let newIngredArr = [...state.ingredArr];
            let tempMeasure = action.payload.measure;
            let tempIngredient = action.payload.ingredient;

            console.log(`${tempMeasure}\n ${tempIngredient}`);

            // let measureObj = new Measure(0, action.payload.measure);
            // let ingredientObj = new Ingredient(0, action.payload.ingredient);
            // let ingred: Ingredients = new Ingredients(measureObj, ingredientObj, action.payload.amount);
            // newIngredArr.push(ingred);

            return {
                ...state, 
                ingredArr: newIngredArr
            }
        case enterNewRecipeTypes.UPDATE_AMOUNT:
            return {
                ...state, 
                amount: action.payload.amount
            }
        case enterNewRecipeTypes.UPDATE_MEASURE:
            return {
                ...state, 
                measure: action.payload.measure
            }
        case enterNewRecipeTypes.UPDATE_INGREDIENT:
            return {
                ...state, 
                ingredient: action.payload.ingredient
            }
        case enterNewRecipeTypes.UPDATE_RECIPE_NAME: 
            return {
                ...state,
                recipeName: action.payload.name
            }
        case enterNewRecipeTypes.UPDATE_DESCRIPTION:
            return {
                ...state,
                description: action.payload.description
            }
        case enterNewRecipeTypes.UPDATE_INSTRUCTIONS:
            return {
                ...state, 
                instructions: action.payload.instructions
            }
        case enterNewRecipeTypes.SUBMIT_RECIPE: 
            return {
                ...state, 
                status: action.payload.status
            }
        case enterNewRecipeTypes.POPULATE_INGREDIENT:
            return {
                ...state,
                ingredientPop: action.payload.ingredientPop
            }
        case enterNewRecipeTypes.POPULATE_MEASUREMENT:
            return {
                ...state,
                measurePop: action.payload.measurePop
            }
        }
    return state;
}