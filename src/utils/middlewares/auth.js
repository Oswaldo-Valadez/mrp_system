"use strict";

module.exports = {
    requiresAuthentication(req, res, next) {
        if (req.isAuthenticated()) return next();
        else res.redirect('/signin');
    },
    preventReturnToSignin(req, res, next) {
        if (req.isAuthenticated()) res.redirect('/dashboard');
        else return next();
    }
};
