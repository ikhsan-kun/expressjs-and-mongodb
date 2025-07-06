//import express
const express = require('express')

//import router
const router = require('./routes')

//init app
const app = express()

//define port
const port = 3000;

//route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//define routes
app.use('/api', router)

//start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})