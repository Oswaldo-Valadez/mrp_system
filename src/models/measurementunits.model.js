"use strict";

const { pool } = require("../utils/database/query");

exports.getMeasurementunitsCount = async () => {
    const count = (await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["measurementunits"]))[0].count;
    return count;
};

exports.getAllMeasurementunits = async () => {
    const measurementunits = await pool.query(`SELECT * FROM ??`, ["measurementunits"]);
    return measurementunits;
};

exports.getOneMeasurementunit = async (id_measurementunit) => {
    const measurementunit = await (pool.query(`SELECT * FROM ?? WHERE ?`, ["measurementunits", { id_measurementunit }]))[0];
    return measurementunit;
};

exports.createMeasurementunit = async (values) => {
    const res = await pool.query(`INSERT INTO ?? SET ?`, ["measurementunits", values]);
    return res;
};

exports.updateMeasurementunit = async (id_measurementunit, values) => {
    const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, ["measurementunits", values, { id_measurementunit }]);
    return res;
};

exports.deleteMeasurementunit = async (id_measurementunit) => {
    const res = await pool.query(`DELETE FROM ?? WHERE ?`, ["measurementunits", { id_measurementunit }]);
    return res;
};
