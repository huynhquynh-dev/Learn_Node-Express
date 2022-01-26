const express = require('express');
const connectDB = require('./config/db');
const { post } = require('./router/post');

// Khởi động app
const app = express();

//  Khởi động express middleware
app.use(express.json())

// Kết nối CSDL
connectDB()

app.use('/posts', post)

const PORT = 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))