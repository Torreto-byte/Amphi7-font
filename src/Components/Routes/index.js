import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home';
import Notfound from '../../Pages/NotFound';
import UserProfile from '../../Pages/UserProfile';
import AuthLayout from '../../Pages/Auth/AuthLayout';


const index = () => {
    return (
        <Routes>
            <Route exact path="/" element={<AuthLayout/> } />
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/user-profil" element={<UserProfile/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    );
};

export default index;