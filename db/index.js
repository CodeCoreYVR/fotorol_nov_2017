// To avoid rewriting our knex configuration, we load from the knexfile.js
// that we created earlier.
const knexFile = require('../knexfile');

// We choose a configuration from the knexfile.js based on
// on the context our app is running in (e.g. production, staging
// or development). And, pass it to the function from `require('knex')`
// which will create a connection between knex and our postgres database.
const knex = require('knex')(knexFile[process.env.NODE_ENV || 'development']);

module.exports = knex;
