const express = require('express');
const User = require('./models/User'); 
const router = express.Router();

router.post('/update-attendance', async (req, res) => {
    const { email } = req.body;

    try {
        await User.updateOne({ email }, { $set: { Attending: true } });
        res.status(200).json({ message: 'Attendance updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update attendance.' });
    }
});

module.exports = router;
