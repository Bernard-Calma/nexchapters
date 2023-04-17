const mongoose = require('mongoose')

const mongoDBUrl = process.env.MONGODB_URL;
mongoose.connect(mongoDBUrl);
mongoose.connection.on('connected', () => console.log("Database Connected"))
mongoose.connection.on('error', (err) => console.log(err.message))
mongoose.connection.on('disconnected', () => console.log("Database Disconnected"))