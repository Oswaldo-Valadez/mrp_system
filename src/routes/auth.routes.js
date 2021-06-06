"use strict";

const router = require('express').Router();

const { preventReturnToSignin } = require('../utils/middlewares/auth');

const authController = require('../controllers/auth.controller');

router.route('/')
    .get((req, res) => {
        res.redirect('/signin');
    });

router.use('/signin', preventReturnToSignin);

router.route('/signin')
    .get(authController.renderSignIn)
    .post(authController.signin);

router.route('/signout')
    .get(authController.signout);

module.exports = router;