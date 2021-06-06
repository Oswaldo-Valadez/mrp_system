"use strict";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const { pool } = require("../database/query");

const { matchPassword } = require("../helpers/crypt");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const user = (
        await pool.query(
          `
                SELECT * FROM users
                WHERE username = ?
            `,
          [username]
        )
      )[0];

      if (user) {
        const validPassword = await matchPassword(password, user.password);

        if (validPassword) {
          done(null, user, req.flash('successSignin', 'Signed in'));
        } else {
          done(null, false, req.flash('error', 'Wrong credentials'));
        }
      } else {
        return done(null, false, req.flash('error', 'Wrong credentials'));
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id_user);
});

passport.deserializeUser(async (id, done) => {
  let user = (
    await pool.query(
      `
        SELECT * FROM users
        WHERE id_user = ?
    `,
      [id]
    )
  )[0];

  done(null, user);
});
