const express = require('express');
const router = express.Router();
const db = require('../models');
const Bet = db.Bet;

router.post('/', (req, res) => {
  Bet.create(req.body).then((rez) => {
    res.status(201).send('Bet created');
  }).catch((err) => {
    console.log('Some errors here: ' + err);
  });
});

router.post('/:id', (req, res) => {
  Bet.update(
    { bet_status: req.body.bet_status },
    { returning: true, where: { id: req.params.id } }
  ).then((rez) => {
    res.status(200).send('Bet status updated');
  }).catch((err) => {
    console.log('Some errors here: ' + err);
  });
});

module.exports = router;