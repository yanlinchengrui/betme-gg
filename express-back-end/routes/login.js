const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.User;

router.post('/', (req, res) => {
  User.findOne({
    attributes: ['id'],
    where: { 
      email: req.body.email,
      password: req.body.password
    }
  }).then((user) => {
    if (!user.dataValues.id) {
      res.sendStatus(403);
    } else {
      console.log(user.dataValues.id)
      req.session.user_id = user.dataValues.id;
      res.json({ message: `You logged in as ${user.dataValues.id}`});
    }
  });
});

module.exports = router;