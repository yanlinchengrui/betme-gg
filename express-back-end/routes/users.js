const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

router.get('/', (req, res) => {
  User.findAll()
    .then((rez) => {
      console.log(rez);
      res.json(rez);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.session.user.id }, include: [{ model: db.Bet, as: 'bets' }]
  }).then((rez) => {
    console.log(rez.toJSON())
    res.json(rez);
  });
});

module.exports = router;