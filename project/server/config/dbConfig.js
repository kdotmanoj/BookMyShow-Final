const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATABASE_URL;

if (!mongoURI) {
    console.error('DATABASE_URL is not defined');
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection Successful');
}).catch((error) => {
    console.error('Connection unsuccessful');
    console.error(error.message);
    process.exit(1);
});

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB connected');
});

connection.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
});
