require('dotenv').config()
const express = require('express')

const app = express();

const PORT = process.env.NODE_ENV || 8000;
// DATABASE
require('./config/db.connection')

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// ------------------ MIDDLEWARES ------------------

app.get('/', (_,res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is now up and running at Port: ${PORT}`)
})