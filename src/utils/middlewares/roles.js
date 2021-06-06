"use strict";

module.exports = {
    preventClient(req, res, next) {
        if (!req.user.client) return next();
        else res.redirect('back');
    },
    grantOnlyItsInfo(req, res, next) {
        if (req.user.id_client == req.params.id || !req.user.client) return next();
        else res.redirect('back');
    },
    preventControlAdmin(req, res, next) {
        if (!req.user.control_admin) return next();
        else res.redirect('back');
    },
    preventGeneralAdmin(req, res, next) {
        if (!req.user.general_admin) return next();
        else res.redirect('back');
    },
};
