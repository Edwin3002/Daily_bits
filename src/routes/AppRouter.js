import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from '../components/Home'
import { SignUp } from '../components/SignUp'
import { App } from '../components/App'
import { Statistics } from '../components/Statistics';
import { Profile } from '../components/Profile';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Signup' element={<SignUp />} />
                <Route path='/Statistics' element={<Statistics />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

