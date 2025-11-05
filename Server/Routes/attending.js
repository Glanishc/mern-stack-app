const express = require('express');
app.use(cors({
    origin: [
        'https://mern-frontend-app.azurewebsites.net',
        'http://localhost:3000',
        'http://localhost:5173'
    ],
    credentials: true
}));

app.use(express.json());
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
