const express = require('express');
const router = express.Router();
const db = require('../config/database')
const User = require('../models/User');

router.get('/', (req,res) => console.log('USERS'));


module.exports = router;