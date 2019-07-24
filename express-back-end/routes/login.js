const express = require("express");
const router = express.Router();
const db = require("../models");
const User = db.User;

router.post('/', (req, res) => {
  User.findOne({
    attributes: { exclude: ['email', 'password', 'createdAt', 'updatedAt'] },
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then((user) => {
    if (!user.dataValues.id) {
      res.sendStatus(403);
    } else {
      req.session.user = user.dataValues;
      res.json({ message: `You logged in as ${req.session.user.user_name}` });
    }
  });
});

module.exports = router;