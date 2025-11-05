const express = require('express');

app.use(express.json());
const Vehicle = require('../Model/Vehicle'); // Adjust the path as needed

const vehicleRouter = express.Router();

// POST route to add vehicle details
vehicleRouter.post('/add', async (req, res) => {
    const { userEmail, make, model, year, licensePlate, color } = req.body;

    const newVehicle = new Vehicle({
        userEmail,
        make,
        model,
        year,
        licensePlate,
        color,
    });

    try {
        await newVehicle.save();
        res.status(200).json({ message: 'Vehicle details saved successfully', data: newVehicle });
    } catch (error) {
        console.error('Error saving vehicle:', error);
        res.status(500).json({ message: 'Error saving vehicle details', error });
    }
});

module.exports = vehicleRouter;
