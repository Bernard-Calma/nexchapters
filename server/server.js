const express = require('express')

const app = express();

const PORT = process.env.NODE_ENV || 8000;

app.listen(PORT, () => {
    console.log(`Server is now up and running at Port: ${PORT}`)
})