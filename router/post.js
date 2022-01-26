const express = require('express');
const router = express.Router();
const Post = require('../model/Post')

router.get('/', (req, res) => {
    res.send("Test")
})


module.exports = router