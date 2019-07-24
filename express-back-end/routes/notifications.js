const express = require("express");
const router = express.Router();
const db = require("../models");
const UserBet = db.User_Bet;

// get all unread notifications
router.get("/", (req, res) => {
  UserBet.findAll({
    where: {
      user_id: req.session.user.id,
      // user_id: 2,
      notificationRead: false
    }
  }).then(rez => {
    console.log(rez.toJSON);
    res.json(rez);
  });
});

module.exports = router;
