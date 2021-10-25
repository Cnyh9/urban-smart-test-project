import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setLoginAction, setPasswordAction } from '../store/loginReducer';
import { LoginStateContext } from '../context/LoginStateContext';
import { VisibilityOffRounded, VisibilityRounded } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, Box } from '@mui/material'

export const MyForm = () => {

    const {goLogin, disabledBtn, setDisabledBtn} = useContext(LoginStateContext)
    const [passVisible, setPassVisible] = useState(false)

    const dispatch = useDispatch()

    const loginValue = useSelector(state => state.loginValue)
    const passwordValue = useSelector(state => state.passwordValue)

    const setLogin = (inputValue) => {
        dispatch(setLoginAction(inputValue))
    }

    const setPassword = (inputValue) => {
        dispatch(setPasswordAction(inputValue))
    }

    const showPassword = () => {
        setPassVisible(!passVisible)
    }

    const userData = {
        login: 'developer21',
        password: '123456',
    }
    const currentUserData = {
        login: loginValue,
        password: passwordValue,
    }
    useEffect(() => {
        if (JSON.stringify(userData) === JSON.stringify(currentUserData)) {
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }
    }, [loginValue, passwordValue])

    
    const submitHandler = (event) => {
        event.preventDefault()
        goLogin()
    }

    return (
        <Box 
            className="login__form" 
            component="form" 
            onSubmit={submitHandler}
        >
            <h1 className="form__title">Welcome</h1>
            <TextField
                fullWidth
                label="Enter login"
                placeholder="Example"
                required
                margin="normal"
                value={loginValue}
                onChange={e => setLogin(e.target.value)}
                className="form__input"
                variant="standard"
                color="secondary"
            />
            <TextField
                fullWidth
                label="Enter password"
                required
                margin="normal"
                value={passwordValue}
                onChange={e => setPassword(e.target.value)}
                type={passVisible ? 'text' : 'password'}
                InputProps={passwordValue && {
                    endAdornment:
                    <InputAdornment>
                        <IconButton onClick={showPassword}>
                            {passVisible ? <VisibilityOffRounded/> : <VisibilityRounded/>}
                        </IconButton>
                    </InputAdornment>
                }}
                className="form__input"
                variant="standard"
                color="secondary"
            />
            <div className="form__button-wrapper">
                <button 
                    className="form__btn"
                    type="submit"
                    disabled={disabledBtn}
                >Sign in</button>
            </div>
        </Box>
    )
}
