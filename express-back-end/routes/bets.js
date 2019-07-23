const express = require("express");
const router = express.Router();
const db = require("../models");
const Bet = db.Bet;
const UserBet = db.User_Bet;
const User = db.User;
const UserNotification = db.User_Notification;

router.post("/", (req, res) => {
  const newBet = {
    match: req.body.match,
    owner: req.body.owner,
    stakes: req.body.stakes
  };

  const userid = req.body.userid;

  Bet.create(newBet)

    .then(bet => {
      const betid = bet.get("id");

      const ownerBet = {
        user_id: userid,
        bet_id: betid,
        teamSelect: req.body.team
      };

      return UserBet.create(ownerBet);
    })
    // create participant bet, usernotifications, userbets
    .then(userbet => {

      const participantEmails = req.body.emails;

      participantEmails.map(participantEmail => {

        User.findOne({ where: { email: participantEmail } }).then(result => {
          const betid = userbet.bet_id;
          const userid = result.get("id");

          UserBet.create({
            bet_id: betid,
            user_id: userid
          }).then(() => {
            UserNotification.create({
              user_id: userid,
              bet_id: betid,
              notification_id: 1,
              read: false,
              date: new Date(),
              text: "abc"
            });
          });
        });
      });
    })
    .then(() => {
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

router.get('/:id/users', (req, res) => {
  Bet.findOne({ where: { id: req.params.id }, include: [{ model: User, as: 'users' }] }).then(
    (rez) => {
      res.send(rez);
    }
  )
});

module.exports = router;
