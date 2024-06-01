const express = require('express')
const user = require('./user')
const movie = require('./movies')

const router = express.Router();

router.use('/user',user);
router.use('/movie',movie);

module.exports = router