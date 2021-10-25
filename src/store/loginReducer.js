const initialState = {
    loginValue: localStorage.getItem('loginValue') || '',
    passwordValue: '',
}
const LOGIN = 'LOGIN'
const REMOVE_LOGIN = 'REMOVE_LOGIN'
const PASSWORD = 'PASSWORD'
const REMOVE_PASSWORD = 'REMOVE_PASSWORD'

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, loginValue: action.payload}
        case REMOVE_LOGIN:
            return {...state, loginValue: ''}
        case PASSWORD:
            return {...state, passwordValue: action.payload}
        case REMOVE_PASSWORD:
            return {...state, passwordValue: ''}
        default:
            return state
    }
}

export const setLoginAction = (payload) => {
    return ({
        type: LOGIN,
        payload,
    })
}

export const setPasswordAction = (payload) => {
    return ({
        type: PASSWORD,
        payload,
    })
}

export const removeLoginAction = () => {
    return ({
        type: REMOVE_LOGIN,
    })
}

export const removePasswordAction = () => {
    return ({
        type: REMOVE_PASSWORD,
    })
}