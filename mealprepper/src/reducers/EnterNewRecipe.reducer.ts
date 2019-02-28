import { IEnterNewRecipeState, rTuple } from ".";
import { enterNewRecipeTypes } from "../Actions/EnterNewRecipe.action";
import { Measure } from "../Model/Measure";
import { Ingredient } from "../Model/Ingredient";


const initialState: IEnterNewRecipeState = {
    ingredArr: [],
    amount: 0,
    measure: new Measure(0, ''),
    ingredient: new Ingredient(0, ''),
}

export const enterNewRecipeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case enterNewRecipeTypes.ADD_INGREDIENT: 
            let newIngredArr = [...state.ingredArr];
            let ingred:rTuple = {
                rTuple:[action.payload.amount, action.payload.measure, action.payload.ingredient]
            };
            newIngredArr.push(ingred);

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
        }
    return state;
}