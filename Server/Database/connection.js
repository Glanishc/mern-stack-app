const mongoose = require('mongoose');

async function RunServer() {
    try {
        // Use environment variable for production, fallback to local for development
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
        
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1); // Exit if can't connect to database
    }
}

module.exports = RunServer;