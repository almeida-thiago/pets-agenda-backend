'use strict'

const mongoose = require('mongoose');

/* Mogodb connection */
const connectionString = process.env.DB_USER.length
  ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@host:${process.env.DB_URL_ACCESS}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  : `mongodb://${process.env.DB_URL_ACCESS}:${process.env.DB_PORT}/${process.env.DB_NAME}`
mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;