import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, {
                email: email,
                password: password
            });
            console.log(response.data.data);
            alert('Login Successful');
            localStorage.setItem('userEmail', email);
            navigate('/users');
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(`Error: ${error.response.data.message}`); // Correct
            } else {
                alert('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className='loginbox'>
            <form className="login-form">
                <img src="channels4_profile.jpg" alt="" className='avatar' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} /><br />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <Link to="/register">Register Here</Link>
                <input type="submit" className='loginn' value="login" onClick={loginUser} />
            </form>
        </div>
    );
};

export default Login;
