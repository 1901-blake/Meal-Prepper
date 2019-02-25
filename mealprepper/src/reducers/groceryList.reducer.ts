import { state, IGRocState } from ".";
import { groceryTypes } from "../Actions/GroceryList.action";


const initialState: IGRocState = {
    arrayingredient : [],
    amount : 0
}

export const grocReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case groceryTypes.ADD_ROW:
            return {
                ...state,
                // arrayingredient: action.payload.arrayingredient,
                arrayingredient: [...state.arrayingredient, action.payload.hi],
                amount: state.amount
            }
        }
    return state;
}

