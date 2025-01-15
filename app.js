const express = require('express') //Import Express
const app = express()
const port = 3000

// Import Routing
const router = require("./routes/api.js");

// Middleware
app.use(express.json());
// Menggunakan Routernya
app.use(router)
// Start server
app.listen(port);