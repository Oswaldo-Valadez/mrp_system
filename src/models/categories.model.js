"use strict";

const { pool } = require("../utils/database/query");

exports.getCategoriesCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["categories"])
  )[0].count;
  return count;
};

exports.getAllCategories = async () => {
  const categories = await pool.query(`SELECT * FROM ?? ORDER BY pin_up DESC`, [
    "categories",
  ]);
  return categories;
};

exports.getOneCategory = async (id_category) => {
  const category = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "categories",
    { id_category },
  ])[0];
  return category;
};

exports.createCategory = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["categories", values]);
  return res;
};

exports.updateCategory = async (id_category, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "categories",
    values,
    { id_category },
  ]);
  return res;
};

exports.deleteCategory = async (id_category) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "categories",
    { id_category },
  ]);
  return res;
};

exports.pinupCategory = async (id_category, pin_up) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "categories",
    { pin_up },
    { id_category },
  ]);
  return res;
};
