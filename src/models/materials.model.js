"use strict";

const { pool } = require("../utils/database/query");

exports.getMaterialsCount = async () => {
  const count = (
    await pool.query(`SELECT COUNT(*) AS count FROM ??`, ["materials"])
  )[0].count;
  return count;
};

exports.getAllMaterials = async () => {
  const materials = await pool.query(
    `SELECT
      m.*,
      sc.name AS subcategory_name,
      c.name AS category_name,
      b.name AS brand_name
    FROM ?? m
      INNER JOIN ?? sc USING(id_subcategory)
      INNER JOIN ?? c USING(id_category)
      INNER JOIN ?? b USING(id_brand)`,
    ["materials", "subcategories", "categories", "brands"]
  );
  return materials;
};

exports.getOneMaterial = async (id_material) => {
  const material = await pool.query(`SELECT * FROM ?? WHERE ?`, [
    "materials",
    { id_material },
  ])[0];
  return material;
};

exports.createMaterial = async (values) => {
  delete values.id_category;

  const res = await pool.query(`INSERT INTO ?? SET ?`, ["materials", values]);
  return res;
};

exports.updateMaterial = async (id_material, values) => {
  delete values.id_category;

  const res = await pool.query(`UPDATE ?? SET ? WHERE ?`, [
    "materials",
    values,
    { id_material },
  ]);
  return res;
};

exports.deleteMaterial = async (id_material) => {
  const res = await pool.query(`DELETE FROM ?? WHERE ?`, [
    "materials",
    { id_material },
  ]);
  return res;
};
