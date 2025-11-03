const express = require('express');
const RunServer = require('./Database/connection'); // Adjust the path if necessary
const userRouter = require('./Routes/userRoutes');
const contactRouter = require('./Routes/contactRoutes');
const vehicleRouter = require('./Routes/vehicleRoutes');
const cors = require('cors');

const app = express();
const port = 3000;

RunServer(); // Call the RunServer function to establish a connection
app.use(express.json());
app.use(cors());

app.use('/contact', contactRouter);
app.use('/user', userRouter);
app.use('/vehicles', vehicleRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
