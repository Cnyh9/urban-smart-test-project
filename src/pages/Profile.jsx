import React, { useContext, useState, useRef, useEffect } from 'react'
import { LoginStateContext } from '../context/LoginStateContext'
import Confetti from 'react-confetti'
import { useSelector } from 'react-redux'
import { Tooltip } from '@mui/material'

export const Profile = () => {

    const login = useSelector(state => state.loginValue)

    const {goLogout} = useContext(LoginStateContext)
    const [height, setHeigth] = useState(null)
    const [width, setWidth] = useState(null)
    const confettiRef = useRef(null)

    useEffect(() => {
        setHeigth(confettiRef.current.clientHeight)
        setWidth(confettiRef.current.clientWidth)
    }, [height, width])


    return (
        <div>
            <div className="profile__navbar"
                ref={confettiRef}
            >
                <h1>Congratulations!</h1>
                <Confetti 
                    recycle={false}
                    opacity={0.7}
                    numberOfPieces={700}
                    tweenDuration={7000}
                />
            </div>
            <div className="profile__login">
                <div  style={{fontSize: 16}}>Your login is:</div>
                <Tooltip arrow={true} title="to logout click on 'login'">
                    <h1 onClick={goLogout} style={{letterSpacing: 3}}>{login}</h1>
                </Tooltip>
                
            </div>
        </div>
    )
}