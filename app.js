const express = require('express');
const connectDB = require('./config/db');
const exphbs = require('express-handlebars')

// Nhap khau routes
const { post } = require('./router/post');

// Khởi động app
const app = express();

// Khoi dong Handlebars middleware
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//  Khởi động express middleware
app.use(express.json())

// Kết nối CSDL
connectDB()

// Mot so routes co ban, co the dua vao file rieng trong thu muc routes
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))

// Mang routes vao de su dung
app.use('/posts', post)

const PORT = 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))