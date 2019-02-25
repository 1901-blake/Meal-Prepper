import { state, IRecipeHistoryState } from ".";
import { recipeHistoryTypes } from "../Actions/RecipeHistory.action";


const initialState: IRecipeHistoryState = {
    recipehistoryarray: [],
}

export const recipeHistoryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case recipeHistoryTypes.LOAD_RECIPE_HISTORY_ROW:
            return {
                ...state,

                // recipehistoryarray: [...state.recipehistoryarray, action.payload.recipehis],
                recipehistoryarray: action.payload.recipehis,

            }
    }

    return state;
}

