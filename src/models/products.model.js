"use strict";

const { pool } = require("../utils/database/query");

const Spreadsheet = require("./spreadsheet.model");

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
  const product = (await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "products",
    { id_product },
  ]))[0];

  const spreadsheet = await Spreadsheet.getAllSpreadsheetByProduct(id_product);

  return { product, spreadsheet };
};

exports.createProduct = async (values) => {
  const { name, description, id_component, quantity } = values;
  
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "products",
    { name, description },
  ]);

  const { insertId } = res;

  if (id_component) {
    for (let i = 0; i < id_component.length; i++) {
      const product_component = {
        id_product: insertId,
        id_component: id_component[i],
        quantity: quantity[i],
      };
      await Spreadsheet.createSpreadsheet(product_component);
    }
  }

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

exports.createProductComponent = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, [
    "product_components",
    values,
  ]);

  return res;
};
