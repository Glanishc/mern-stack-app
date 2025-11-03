import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Users from './pages/Users';
import VehicleForm from './pages/VehicleForm';

function App() {
    const location = useLocation();

    return (
        <div>
            {(location.pathname !== '/users' || location.pathname !== '/add-vehicle')  && <Banner />}
            {(location.pathname === '/users' || location.pathname === '/add-vehicle') && <Banner2 />}

            
            
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/users' element={<Users />} />
                <Route path='/add-vehicle' element={<VehicleForm />} />
            </Routes>
        </div>
    );
}

export default App;
