import React from 'react'
import { Drops } from '../components/Drops';
import { MyForm } from '../components/MyForm';

export const Login = () => {

    return (
        <div className="login__wrapper">
            <MyForm />
            <Drops />
        </div>
    )
}