const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../models/User');

router.get('/', (req, res) => {
  console.log('lol');
});

module.exports = router;