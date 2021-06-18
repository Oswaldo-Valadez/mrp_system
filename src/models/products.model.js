"use strict";

const { pool } = require("../utils/database/query");

exports.getProductsCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["products"])
  )[0].count;
  return count;
};

exports.getAllProducts = async () => {
  const products = await pool.query(`SELECT * FROM ??`, ["products"]);
  return products;
};

exports.getOneProduct = async (id_product) => {
  const product = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "products",
    { id_product },
  ])[0];
  return product;
};

exports.createProduct = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["products", values]);
  return res;
};

exports.updateProduct = async (id_product, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "products",
    values,
    { id_product },
  ]);
  return res;
};

exports.deleteProduct = async (id_product) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "products",
    { id_product },
  ]);
  return res;
};
