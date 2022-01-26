const express = require('express');
const connectDB = require('./config/db');

// Khởi động app
const app = express();

//  Khởi động express middleware
app.use(express.json())

// Kết nối CSDL
connectDB()

const PORT = 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))