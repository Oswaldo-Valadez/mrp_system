"use strict";

const { pool } = require("../utils/database/query");

exports.getMPS = async () => {
    const mps = await pool.query(`SELECT * FROM ??`, ["mrp_months"]);
    return mps;
  };