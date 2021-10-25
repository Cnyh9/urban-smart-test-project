import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginStateContext } from './context/LoginStateContext';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { removeLoginAction, removePasswordAction } from './store/loginReducer';

function App() {
    const dispatch = useDispatch()
    const [disabledBtn, setDisabledBtn] = useState(true)
    const loginValue = useSelector(state => state.loginValue)
    const [isLogin, setIsLogin] = useState(
        localStorage.getItem('loginState') 
        ? JSON.parse(localStorage.getItem('loginState')) 
        : false 
    )
    
    const goLogout = () => {
        setIsLogin(false)
        localStorage.setItem('loginState', 'false')
        localStorage.setItem('loginValue', '')
        dispatch(removeLoginAction())
        dispatch(removePasswordAction())
    }

    const goLogin = () => {
        setIsLogin(true)
        localStorage.setItem('loginState', 'true')
        localStorage.setItem('loginValue', loginValue)
    }

    return (
        <LoginStateContext.Provider value={{goLogin, goLogout, disabledBtn, setDisabledBtn}}>
        <div className="App">
            <Switch>
                {!isLogin 
                ? <Route exact path="/"><Login/></Route> 
                : <Route path="/profile"><Profile/></Route>}
                {!isLogin ? <Redirect to="/"/> : <Redirect to="/profile"/>}
            </Switch>
        </div>
        </LoginStateContext.Provider>
    );
} 

export default App;
