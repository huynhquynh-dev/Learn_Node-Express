const express = require("express");
const connectDB = require("./config/db");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Nhap khau routes
const posts = require("./router/posts");

// Khởi động app
const app = express();

// Khoi dong Handlebars middleware
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Khoi dong bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Khoi dong methodOverride middleware
app.use(methodOverride("_method"));

//  Khởi động express middleware
app.use(express.json());

// Kết nối CSDL
connectDB();

// Mot so routes co ban, co the dua vao file rieng trong thu muc routes
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));

// Mang routes vao de su dung
app.use("/posts", posts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
