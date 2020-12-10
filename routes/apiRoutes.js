const Router = require("express").Router();

Router.get("/welcome", (req, res) => {
  res.json({ message: "You have gone full MERN!!!"});
})

app.post("/user", async (req, res) => {
  const user = await db.User.create(req.body)
  res.json(user)
})

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

module.exports = Router;
