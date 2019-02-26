import { IUserInfoState } from ".";
import { userinfoTypes, setInitial } from "../Actions/UserInfo.action";


const initialState: IUserInfoState = {
    username: '',
    email: '', 
    firstname: '', 
    lastname: '', 
    feedback: ''
}

export const userInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userinfoTypes.UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        case userinfoTypes.UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload.username
            }
        case userinfoTypes.UPDATE_FIRSTNAME:
            return {
                ...state,
                firstname: action.payload.firstname
            }
        case userinfoTypes.UPDATE_LASTNAME:
            return {
                ...state,
                lastname: action.payload.lastname
            }
        case userinfoTypes.SET_INITIAL:
            return {
                ...state, 
                email: action.payload.email,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname, 
                username: action.payload.username
            }
        case userinfoTypes.FORM_SUBMIT:
            return {
                ...state, 
                feedback: action.payload.feedback
            }
        }
    return state;
}