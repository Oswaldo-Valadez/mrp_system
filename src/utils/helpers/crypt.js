"use strict";

const bcrypt = require('bcryptjs');

module.exports = {
    async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    },
    async matchPassword(password, savedPassword) {
        try {
            return await bcrypt.compare(password, savedPassword);
        } catch (e) {

        }
    }
}
