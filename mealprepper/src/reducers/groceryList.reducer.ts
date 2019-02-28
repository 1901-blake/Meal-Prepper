import { state, IGRocState } from ".";
import { groceryTypes } from "../Actions/GroceryList.action";


const initialState: IGRocState = {
    arrayingredient: [],
    amount: 0
}

export const grocReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case groceryTypes.LOAD_ROW:
            return {
                ...state,
                arrayingredient: action.payload.Ingredientname,
            }
        case groceryTypes.ADD_ROW:
            return {
                ...state,
                arrayingredient: [...state.arrayingredient, action.payload.temo],
            }
    }

    return state;
}

