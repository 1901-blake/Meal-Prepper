import { IGenerateMealPlanState } from ".";
import { generateMealPlanTypes } from "../Actions/GenerateMealPlan.action";



const initialState: IGenerateMealPlanState = {
    mealPlan: [], 
    status: ''
}

export const generateMealPlanReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case generateMealPlanTypes.CREATE_RECIPE:
            return {
                ...state,
                mealPlan: action.payload.recipe
            }
        case generateMealPlanTypes.SAVE_RECIPE:
            return {
                ...state,
                status: action.payload.status
            }
        }
    return state;
}