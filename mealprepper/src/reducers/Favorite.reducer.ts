import { state, IFavoriteState } from ".";
import { favoriteTypes } from "../Actions/Favorite.action";


const initialState: IFavoriteState = {
    favoriteRecipeArr: [],
}

export const favoriteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case favoriteTypes.LOAD_FAVORITE_PLAN:
            return {
                ...state,
                favoriteRecipeArr: action.payload.favoriteRecipe,
            }
    }

    return state;
}

