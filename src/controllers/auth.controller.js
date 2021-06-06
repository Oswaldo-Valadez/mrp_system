"use strict";

const passport = require('passport');

exports.renderSignIn = (req, res, next) => {
    res.render('signin', { layout: 'layouts/main' });
}

exports.signin = (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next)
};

exports.signout = (req, res, next) => {
    req.logOut();
    res.redirect('/signin');
};