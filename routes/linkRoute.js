const express = require('express')
const router = express.Router();
const Link = require('../models/Link')
const linkController = require('../controllers/linkController')




router.get('/:title', linkController.redirect)

router.get ('/', (req, res)=>  res.send("hello world"));

module.exports = router;