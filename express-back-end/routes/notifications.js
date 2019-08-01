const express = require("express");
const router = express.Router();
const db = require("../models");
const UserBet = db.User_Bet;
const Bet = db.Bet;

router.put("/:id/termStatus", (req, res) => {
  let betid;

  UserBet.update(
    {
      termStatus: req.body.termStatus,
      notificationType: req.body.termStatus ? 'teamSelect' : 'declined'
    },
    {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    }
  )
    .then((thisUserBet) => {
      betid = thisUserBet[1].dataValues.bet_id;
      return UserBet.findAndCountAll({
        where: { bet_id: betid, termStatus: true }
      })
    })
    .then((result) => {
      Bet.findOne(
        {
          where: { id: betid },
          attributes: ['inviteCount', 'bet_status'],
        }
      ).then((countAndStatus) => {
        Bet.update(
          {
            participants: result.count,
            // use == because one of them is string and the other is integer
            bet_status: countAndStatus.dataValues.inviteCount == result.count ? 'active' : countAndStatus.dataValues.bet_status,
          },
          { where: { id: betid } }
        )
      })
    })
    .then(() => {
      res.status(200).json({ message: "modified" });
    });
});

router.put("/:id/teamSelect", (req, res) => {
  UserBet.update(
    {
      teamSelect: req.body.teamSelect,
      notificationType: 'inProgress'
    },
    {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    }
  ).then((thisUserBet) => {
    const userId = thisUserBet[1].dataValues.user_id;
    db.User.findOne({ where: { id: userId }, include: [{ model: Bet, as: 'bets', where: { id: thisUserBet[1].dataValues.bet_id }, attributes: ['stakes'] }] })
      .then((userIwant) => {
        userIwant.update({ bank: userIwant.dataValues.bank - userIwant.dataValues.bets[0].dataValues.stakes });
      });
    res.status(200).json({ message: "modified" });
  }).catch((err) => {
    res.status(500).json({ message: "something went wrong here" });
    console.log(err);
  });
});

router.put("/:id/notificationRead", (req, res) => {
  UserBet.update(
    {
      notificationRead: true
    },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).json({ message: 'modified' });
  });
});

module.exports = router;
