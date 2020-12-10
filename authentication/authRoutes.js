const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const db = require("../models");

Router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log(user);
    if (err || !user) {
      return res.status(400).json({
        message: "Something isn't right",
        user: user
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user.toJSON(), process.env.PASSPORT_SECRET);
      const { email } = user;

      return res.json({ email, token })
    });
  })(req, res, next)
});


Router.get("/users", (req, res) => {
  db.User.find({}, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})

Router.post("/signup", async (req, res) => {
  const user = await db.User.create(req.body);
  res.json(user);
})

module.exports = Router;