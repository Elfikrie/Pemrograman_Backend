const express = require('express') //import express
const app = express() 
const port = 3000

// Mengimport routing
const router = require("./routes/api.js")
// Middleware
app.use(express.json());

// Menggunakan routenya
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})