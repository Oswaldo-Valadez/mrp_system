"use strict";

const { pool } = require("../utils/database/query");

exports.getSubcategoriesCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["subcategories"])
  )[0].count;
  return count;
};

exports.getAllSubcategories = async () => {
  const subcategories = await pool.query(
    `SELECT sc.*, c.name AS category_name FROM ?? sc INNER JOIN ?? c USING(id_category)`,
    ["subcategories", "categories"]
  );
  return subcategories;
};

exports.getOneSubcategory = async (id_subcategory) => {
  const subcategory = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "subcategories",
    { id_subcategory },
  ])[0];
  return subcategory;
};

exports.createSubcategory = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "subcategories",
    values,
  ]);
  return res;
};

exports.updateSubcategory = async (id_subcategory, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "subcategories",
    values,
    { id_subcategory },
  ]);
  return res;
};

exports.deleteSubcategory = async (id_subcategory) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "subcategories",
    { id_subcategory },
  ]);
  return res;
};

exports.getSubcategoriesByCategory = async (id_category) => {
  const res = await pool.query(`SELECT sc.* FROM ?? sc INNER JOIN ?? c USING(id_category) WHERE ?`, [
    "subcategories",
    "categories",
    { id_category },
  ]);
  return res;
};
