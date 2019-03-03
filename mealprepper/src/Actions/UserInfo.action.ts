import { Auth } from "aws-amplify";

export const userinfoTypes = {
    UPDATE_USERNAME: 'USERINFO_UPDATE_USERNAME',
    UPDATE_EMAIL: 'USERINFO_UPDATE_EMAIL',
    UPDATE_FIRSTNAME: 'USERINFO_UPDATE_FIRSTNAME',
    UPDATE_LASTNAME: 'USERINFO_UPDATE_LASTNAME', 
    SET_INITIAL: 'USERINFO_SET_INITIAL', 
    FORM_SUBMIT: 'USERINFO_HANDLE_SUBMIT'
}

export const handleSubmit = (event, username: string, firstname: string, lastname: string, email: string) => async (dispatch) => {
    event.preventDefault();
    try {
        let curr = await Auth.currentAuthenticatedUser();
        console.log(curr);
        Auth.updateUserAttributes(curr, {
            'email': email, 
            'name': username, 
            'given_name': firstname, 
            'family_name': lastname
        });

        dispatch({
            payload: {
                feedback: 'Successful'
            }, 
            type: userinfoTypes.FORM_SUBMIT
        })
    } catch (err) {
        console.log(err);
        dispatch({
            payload: {
                feedback: 'Unsuccessful'
            }, 
            type: userinfoTypes.FORM_SUBMIT
        })
    }
}

export const setInitial = () => async (dispatch) => {

    try {
        let curr = await Auth.currentAuthenticatedUser({ bypassCache: true });

        console.log(curr);
        dispatch({
            payload: {
                username: curr.attributes.name,
                firstname: curr.attributes.given_name,
                lastname: curr.attributes.family_name,
                email: curr.attributes.email
            }, 
            type: userinfoTypes.SET_INITIAL
        })

    } catch (err) {
        console.log(err);
    }
}

export const updateUsername = (event) => {
    return {
        payload: {
            username: event.target.value
        },
        type: userinfoTypes.UPDATE_USERNAME
    }
}

export const updateEmail = (event) => {
    return {
        payload: {
            email: event.target.value
        },
        type: userinfoTypes.UPDATE_EMAIL
    }
}

export const updateFirstName = (event) => {
    return {
        payload: {
            firstname: event.target.value
        },
        type: userinfoTypes.UPDATE_FIRSTNAME
    }
}

export const updateLastName = (event) => {
    return {
        payload: {
            lastname: event.target.value
        },
        type: userinfoTypes.UPDATE_LASTNAME
    }
}