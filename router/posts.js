const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

// Hien thi form de tao bai viet moi
router.get("/add", (req, res) => {
    res.render("posts/add");
});

module.exports = router;
