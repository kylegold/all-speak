const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require("bcrypt");
const db = require("../models");

passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password"
		},
		async function (email, password, cb) {
			const user = await db.User.findOne({ email });
			try {
				if (!user) {
					return cb(null, false, {
						message: "Incorrect email or password"
					});
				}
				if (await bcrypt.compare(password, user.password)) {
					return cb(null, user, { message: "You logged in successfully!" });
				} else {
					return cb(null, false, {
						message: "Incorrect email or password"
					});
				}
			} catch (err) {
				cb(err);
			}
		}
	)
);

passport.use(
	new JWTStrategy(
		{
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.PASSPORT_SECRET
		},
		async function (jwtPayload, cb) {
			const user = await db.User.find({ _id: jwtPayload.id });
			try {
				return cb(null, user);
			} catch (err) {
				return cb(err);
			}
		}
	)
);

module.exports = passport;
