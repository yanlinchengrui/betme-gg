const express = require("express");
const router = express.Router();
const db = require("../models");
const UserBet = db.User_Bet;

// get all unread notifications
router.get("/", (req, res) => {
  UserBet.findAll({
    where: {
      user_id: req.session.user.id,
    }
  }).then((rez) => {
    console.log(rez.toJSON);
    res.json(rez);
  });
});

router.post("/:id/termStatus", (req, res) => {
  UserBet.update(
    { termStatus: req.body.termStatus },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).json({ message: "modified" });
  });
});

router.post("/:id/teamSelect", (req, res) => {
  UserBet.update(
    { teamSelect: req.body.teamSelect },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).json({ message: "modified" });
  });
});

module.exports = router;
