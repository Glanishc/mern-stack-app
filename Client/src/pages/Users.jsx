import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import "./Users.css";
import { Link } from 'react-router-dom';

const Users = () => {
    const [email, setEmail] = useState(localStorage.getItem('userEmail') || "");
    const [buttonText, setButtonText] = useState('JOIN US!');

    const changeText = async (e) => {
        const button = document.getElementById('applyButton');

        if (!email) {
            setButtonText('Please log in');
            return;
        }

        if (buttonText === 'JOIN US!') {
            setButtonText('VERIFYING CREDENTIALS');
            button.classList.remove('apply-btn');
            button.classList.add('verification-btn');
            try {
                const attendanceResponse = await fetch('http://localhost:3000/user/update-attending', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });

                const responseData = await attendanceResponse.json();

                if (attendanceResponse.ok) {
                    setButtonText('JOINED!');
                    button.classList.remove('verification-btn');
                    button.classList.add('joined-btn');
                } else {
                    setButtonText('FAILED!');
                    button.classList.remove('verification-btn');
                    button.classList.add('failed-btn');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                setButtonText('FAILED!');
                button.classList.remove('verification-btn');
                button.classList.add('failed-btn');
            }
        }
    };

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="image-container">
                        <video loop autoPlay muted>
                            <source src="BG3.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <CountdownTimer />
                    <button id="applyButton" className="apply-btn" onClick={changeText}>{buttonText}</button>
                    <Link to="/add-vehicle">
                        <button className="apply-car">Register YOUR Vehicle</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Users;
