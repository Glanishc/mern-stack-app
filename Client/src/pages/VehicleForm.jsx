import React, { useState } from 'react';
import axios from 'axios';
import './VehicleForm.css';

const VehicleForm = () => {
    const [vehicleData, setVehicleData] = useState({
        userEmail: localStorage.getItem('userEmail') || '',
        make: '',
        model: '',
        year: '',
        licensePlate: '',
        color: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleData({ ...vehicleData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!vehicleData.userEmail) {
            setErrorMessage('Please log in to submit your vehicle details.');
            return;
        }

        try {
            const response = await axios.post('${import.meta.env.VITE_API_URL}/user/login`', vehicleData);
            alert(response.data.message);
            setErrorMessage('');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage('License plate already exists');
            } else {
                setErrorMessage('Error saving vehicle details');
            }
            console.error('Error:', error);
        }
    };

    return (
        <div className='vehicle-form'>
            <h2>Enter Your Vehicle Details</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Make:
                    <input type="text" name="make" value={vehicleData.make} onChange={handleChange} required />
                </label>
                <label>
                    Model:
                    <input type="text" name="model" value={vehicleData.model} onChange={handleChange} required />
                </label>
                <label>
                    Year:
                    <input type="number" name="year" value={vehicleData.year} onChange={handleChange} required />
                </label>
                <label>
                    License Plate:
                    <input type="text" name="licensePlate" value={vehicleData.licensePlate} onChange={handleChange} required />
                </label>
                <label>
                    Color:
                    <input type="text" name="color" value={vehicleData.color} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VehicleForm;
