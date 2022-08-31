import React from 'react';
import { Routes, Route } from "react-router-dom";

import Splash from '../components/Splash/Splash';
import Home from '../components/Home/Home';
import Work from '../components/Work/Work';
import { Contact } from '../components/Contact/Contact';
import About from '../components/About/About';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="home" element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About/>}/>
        </Routes>
    )
}

export default AppRoutes; 



