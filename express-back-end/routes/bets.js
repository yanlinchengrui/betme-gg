const express = require("express");
const router = express.Router();
const db = require("../models");
const Bet = db.Bet;
const UserBet = db.User_Bet;
const User = db.User;

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
    // create participant 
    .then(userbet => {
      
      const participantEmails = req.body.emails;
      let participantIds = [];

      participantEmails.map(participantEmail => {
       User.findOne({ where: { email: participantEmail }})
        .then(result => {
          // participantIds.push(result.get("id"))
          UserBet.create({
            bet_id: userbet.bet_id,
            user_id: result.get("id")
          }).then(rez => {
            res.status(201).send("Bet created");
          })
          .catch(err => {
            console.log("Some errors here: " + err);
          });
        })
      })

    //   const participantBets = participantIds.map(participantId => {
    //     return UserBet.create({
    //       bet_id: userbet.bet_id,
    //       user_id: participantId
    //     });
    //   });
    //   return Promise.all(participantBets);
    // })
    // .then(rez => {
    //   res.status(201).send("Bet created");
    // })
    // .catch(err => {
    //   console.log("Some errors here: " + err);
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

module.exports = router;
