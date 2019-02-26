import { IEnterNewRecipeState, rTuple } from ".";
import { enterNewRecipeTypes } from "../Actions/EnterNewRecipe.action";


const initialState: IEnterNewRecipeState = {
    ingredArr: [],
    amount: 0, 
    measure: '',
    ingredient: '',
}

export const enterNewRecipeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case enterNewRecipeTypes.ADD_INGREDIENT: 
            let newIngredArr = [...state.ingredArr];
            let ingred:rTuple ={
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
        }
    return state;
}