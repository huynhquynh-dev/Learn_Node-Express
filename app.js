const express = require('express');

// Khởi động app
const app = express();

//  Khởi động express middleware
app.use(express.json())

const PORT = 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))