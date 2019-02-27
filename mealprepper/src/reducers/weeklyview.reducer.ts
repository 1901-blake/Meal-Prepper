import { state, IWeeklyViewState } from ".";
import { weeklyViewTypes } from "../Actions/WeeklyView.action";


const initialState: IWeeklyViewState = {
    weeklyrecipe: [],
}

export const weeklyViewReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case weeklyViewTypes.LOAD_WEEK_PLAN:
            return {
                ...state,
                weeklyrecipe: action.payload.weeklyrecipe,
            }
    }

    return state;
}

