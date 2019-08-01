const express = require("express");
const router = express.Router();
const db = require("../models");
const Bet = db.Bet;
const UserBet = db.User_Bet;
const User = db.User;

router.post("/", (req, res) => {
  const newBet = {
    match: req.body.match,
    owner: req.session.user.user_name,
    stakes: req.body.stakes,
    bet_status: 'pending',
    team1: req.body.team1,
    team2: req.body.team2,
    team1FullName: req.body.team1FullName,
    team2FullName: req.body.team2FullName,
    game: req.body.game,
    team1logo: req.body.team1logo,
    team2logo: req.body.team2logo,
    start_time: req.body.start_time,
    participants: 1,
    inviteCount: req.body.emails.length + 1,
    matchId: req.body.matchId,
  };

  // session userId
  const userid = req.session.user.id;

  Bet.create(newBet)
    .then((bet) => {
      const betid = bet.get("id");
      const ownerBet = {
        user_id: userid,
        bet_id: betid,
        teamSelect: req.body.team,
        notificationType: 'inProgress',
        termStatus: true,
        earnOrLost: req.body.stakes,
      };
      return UserBet.create(ownerBet);
    })
    // create participant bet, usernotifications, userbets
    .then((userbet) => {

      const participantEmails = req.body.emails;

      participantEmails.map(participantEmail => {
        User.findOne({ where: { email: participantEmail } }).then((result) => {
          const betid = userbet.bet_id;
          const userid = result.get("id");
          UserBet.create({
            bet_id: betid,
            user_id: userid,
            notificationType: 'invite',
            notificationRead: false,
            earnOrLost: req.body.stakes,
          })
        });
      });
    })
    .then(() => {
      User.findOne({ where: { id: userid } }).then((owner) => owner.update({ bank: owner.dataValues.bank - req.body.stakes }));
      res.status(201).send("Bet created");
    })
    .catch(err => {
      console.log("Some errors here: " + err);
    });
});

router.post("/:id", (req, res) => {
  Bet.update(
    { bet_status: req.body.bet_status },
    { returning: true, where: { id: req.params.id } }
  )
    .then(rez => {
      res.status(200).send("Bet status updated");
    })
    .catch(err => {
      console.log("Some errors here: " + err);
    });
});

router.get('/user/:id', (req, res) => {
  Bet.findOne({ where: { id: req.params.id }, include: [{ model: User, as: 'users' }] }).then(
    (rez) => {
      res.send(rez);
    }
  )
});

module.exports = router;
