"use strict";

const pool = require("./pool");

module.exports = {
  async nestTablesQuery(sql, fields) {
    return await pool.query(
      {
        sql: sql,
        nestTables: '_',
      },
      fields
    );
  },
  pool,
};
