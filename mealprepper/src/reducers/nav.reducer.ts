import { state, INavState } from ".";
import { navTypes } from "../Actions/Nav.action";


const initialState: INavState = {
    dropdown1: false,
    dropdown2: false
}

export const navReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case navTypes.TOGGLE:
            return {
                ...state,
                dropdown1: !state.dropdown1
            }
        case navTypes.TOGGLE1:
            return {
                ...state,
                dropdown2: !state.dropdown2
            }
        }
    return state;
}

