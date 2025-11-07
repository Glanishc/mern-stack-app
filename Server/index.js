const express = require('express');
const RunServer = require('./Database/connection');
const userRouter = require('./Routes/userRoutes');
const contactRouter = require('./Routes/contactRoutes');
const vehicleRouter = require('./Routes/vehicleRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
  origin: 'https://witty-cliff-0799bd200.3.azurestaticapps.net', // Add your frontend URL
  credentials: true
}));

RunServer(); // Call the RunServer function to establish a connection

app.use('/contact', contactRouter);
app.use('/user', userRouter);
app.use('/vehicles', vehicleRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Fixed: use parentheses not backticks
});
