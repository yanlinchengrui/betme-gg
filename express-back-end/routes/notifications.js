const express = require("express");
const router = express.Router();
const db = require("../models");
const UserNotification = db.User_Notification;

// get all unread notifications
router.get("/", (req, res) => {
  UserNotification.findAll({
    where: {
      user_id: req.body.user_id,
      read: false
    }
  })
  .then(rez => {
    console.log(rez.toJSON);
    res.json(rez);
  });
});

module.exports = router;
