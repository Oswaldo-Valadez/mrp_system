"use strict";

const { pool } = require("../utils/database/query");

exports.getAllCategories = async () => {
    const categories = await pool.query(`SELECT * FROM ??`, ["categories"]);
    return categories;
};

exports.getOneCategory = async (id_category) => {
    const category = await (pool.query(`SELECT * FROM ?? WHERE ?`, ["categories", { id_category }]))[0];
    return category;
};

exports.createCategory = async (values) => {
    const res = await pool.query(`INSERT INTO ?? SET ?`, ["categories", values]);
    return res;
};

exports.updateCategory = async (id_category, values) => {
    const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, ["categories", values, { id_category }]);
    return res;
};

exports.deleteCategory = async (id_category) => {
    const res = await pool.query(`DELETE FROM ?? WHERE ?`, ["categories", { id_category }]);
    return res;
};
