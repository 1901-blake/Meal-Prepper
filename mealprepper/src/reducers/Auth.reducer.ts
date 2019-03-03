import { AuthActionTypes } from "../Actions/AuthActions";
import { IAuthState } from ".";

const initialState: IAuthState = {
    isLoggedIn : false
}

export const AuthReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case AuthActionTypes.LOGIN :
            return {
                ...state,
                isLoggedIn : true
            }
        case AuthActionTypes.LOGOUT :
        return {
            ...state,
            isLoggedIn : false
        }
    }
    return state;
}