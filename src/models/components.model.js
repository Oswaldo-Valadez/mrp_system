"use strict";

const { pool } = require("../utils/database/query");

const MPS = require("./mps.model");

exports.getComponentsCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["components"])
  )[0].count;
  return count;
};

exports.getAllComponents = async () => {
  const components = await pool.query(
    `SELECT
        m.*,
        c.name AS category_name,
        b.name AS brand_name,
        mu.name AS measurement_unit_name
      FROM ?? m
        INNER JOIN ?? c USING(id_category)
        INNER JOIN ?? b USING(id_brand)
        INNER JOIN ?? mu USING(id_measurement_unit)
      `,
    ["components", "categories", "brands", "measurement_units"]
  );
  return components;
};

exports.getOneComponent = async (id_component) => {
  const component = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "components",
    { id_component },
  ])[0];
  return component;
};

exports.createComponent = async (values) => {
  const res = await pool.query(`INSERT INTO ?? SET ?`, ["components", values]);

  const { insertId: id_component } = res;

  const mps = {
    id_component,
    year: new Date().getFullYear(),
    initial_stock: values.stock,
  };

  const res_mps = await MPS.createMPS(mps);

  return { res, res_mps };
};

exports.updateComponent = async (id_component, values) => {
  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "components",
    values,
    { id_component },
  ]);
  return res;
};

exports.deleteComponent = async (id_component) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "components",
    { id_component },
  ]);
  return res;
};
