import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from '../components/Home'
import { App } from '../components/App'
import { Statistics } from '../components/Statistics';
import { Profile } from '../components/Profile';
import { NavF } from '../style/app_css';
import Nav from '../components/Navbar'
import { Quest } from '../components/Quest';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavF>
                <Nav />
            </NavF>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Statistics' element={<Statistics />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Quest' element={<Quest />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

