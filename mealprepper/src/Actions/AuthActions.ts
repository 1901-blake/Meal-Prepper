export const AuthActionTypes = {
    LOGIN : 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const login = () => (dispatch) => {
    dispatch({
        payload : {
            isLoggedIn : true
        },
        type: AuthActionTypes.LOGIN
    })
}

export const logout = () => (dispatch) => {
    dispatch({
        payload:{
            isLoggedIn : false
        },
        type: AuthActionTypes.LOGOUT
    })
}