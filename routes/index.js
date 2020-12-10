const Router = require("express").Router();
const passport = require("../authentication/passport");
const authRoutes = require("../authentication/authRoutes");
const apiRoutes = require("./apiRoutes");

Router.use("/auth", authRoutes)

Router.use("/api", passport.authenticate('jwt', { session: false }), apiRoutes)



module.exports = Router;