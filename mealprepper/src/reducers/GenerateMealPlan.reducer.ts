import { IGenerateMealPlanState } from ".";
import { generateMealPlanTypes } from "../Actions/GenerateMealPlan.action";



const initialState: IGenerateMealPlanState = {
    breakfast: [],
    lunch: [],
    dinner: [],
    dessert: [],
    status: ''
}

export const generateMealPlanReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case generateMealPlanTypes.SAVE_RECIPE:
            return {
                ...state,
                status: action.payload.status
            }
        case generateMealPlanTypes.CREATE_BREAKFAST:
            return {
                ...state,
                breakfast: action.payload.recipe
            }
        case generateMealPlanTypes.CREATE_LUNCH:
            return {
                ...state,
                lunch: action.payload.recipe
            }
        case generateMealPlanTypes.CREATE_DINNER:
            return {
                ...state,
                dinner: action.payload.recipe
            }
        case generateMealPlanTypes.CREATE_DESSERT:
            return {
                ...state,
                dessert: action.payload.recipe
            }
    }
    return state;
}