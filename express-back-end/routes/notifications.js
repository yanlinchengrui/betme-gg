const express = require("express");
const router = express.Router();
const db = require("../models");
const UserBet = db.User_Bet;
const sequelize = require('sequelize');


// get all unread notifications
// router.get("/", (req, res) => {
//   if (req.session.user) {
//     UserBet.findAll({
//       where: {
//         user_id: req.session.user.id
//       },
//       order: [
//         ['createdAt', 'ASC'],
//       ],
//     }).then((rez) => {
//       // console.log(rez.toJSON);
//       res.json(rez);
//     });
//   } else {
//     res.status(200);
//   }
// });

router.put("/:id/termStatus", (req, res) => {
  UserBet.update(
    {
      termStatus: req.body.termStatus,
      notificationType: req.body.termStatus ? 'teamSelect' : 'declined'
    },
    { where: { id: req.params.id } }
    )
    
    .then(() => {
      return UserBet.findOne({ where: { id: req.params.id } })
    })

    .then((result) => {
      console.log("-------r-r-----",result)
      return UserBet.findAndCountAll({
          where: { bet_id: result.bet_id, termStatus:true}
      })
    })
    .then((result) => {
      console.log(result)
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
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).json({ message: "modified" });
  });
});

router.put("/:id/notificationRead", (req, res) => {
  console.log('this shit broken');
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
