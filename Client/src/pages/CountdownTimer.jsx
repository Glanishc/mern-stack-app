import React, { useState, useEffect } from 'react';
import "./Users.css";

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2026-01-01T00:00:00");
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    return (
        <div className="event-info">
            <h1>WekFest 2025</h1>
            <p>Mark your calendar:</p>
            <div className="countdown">
                <div className="time-box">
                    <span>{timeLeft.days || '0'}</span>
                    <p>Days</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.hours || '0'}</span>
                    <p>Hours</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.minutes || '0'}</span>
                    <p>Mins</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.seconds || '0'}</span>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
