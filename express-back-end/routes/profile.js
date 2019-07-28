const express = require('express');
const router = express.Router();
const db = require('../models');
const UserBet = db.User_Bet;


router.get("/", (req, res) => {
  
  let win = UserBet.findAndCountAll({ where: { user_id: req.session.user.id, userWinStatus: true  } })

  let loss = UserBet.findAndCountAll({ where: { user_id: req.session.user.id, userWinStatus: false  } })

  Promise.all([win, loss])

  .then((result) => {
    res.json({
      win: result[0].count,
      loss: result[1].count
    })
  })
})

module.exports = router;