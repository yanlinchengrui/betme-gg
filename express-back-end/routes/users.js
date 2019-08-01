const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

router.get('/', (req, res) => {
  User.findAll()
    .then((rez) => {
      res.json(rez);
    });
});

router.get('/details', (req, res) => {
  if (!req.session.user) {
    res.status(200)
  }
  User.findOne({
    where: { id: req.session.user.id },
    include: [{ model: db.Bet, as: 'bets' }],
    order: [[{ model: db.Bet, as: 'bets' }, 'createdAt', 'DESC']]
  }).then((rez) => {
    res.json(rez);
  });
});

module.exports = router;