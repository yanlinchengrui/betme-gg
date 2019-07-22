const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

router.get('/', (req, res) => {
  console.log('lol');
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id }
  }).then((rez) => {
    console.log(rez.toJSON())
    res.json(rez);
  });
});

module.exports = router;