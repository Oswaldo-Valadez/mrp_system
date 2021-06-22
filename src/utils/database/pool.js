"use strict";

const mysql = require('mysql');

const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed');
    } else if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections');
    } else if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    } else {
      console.error(err);
    }
  } else {
    console.log('Database connection was made successfully');
    if (connection) connection.release();
  }
  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;