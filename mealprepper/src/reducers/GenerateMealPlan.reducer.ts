import { IGenerateMealPlanState } from ".";
import { generateMealPlanTypes } from "../Actions/GenerateMealPlan.action";



const initialState: IGenerateMealPlanState = {
    mealPlan: []
}

export const generateMealPlanReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case generateMealPlanTypes.CREATE_RECIPE:
            return {
                ...state,
                mealPlan: action.payload.recipe
            }
        }
    return state;
}