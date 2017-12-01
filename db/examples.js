const knex = require('./index');
const log = console.log;

// Inserting into the posts table
const insertQuery = knex
  .insert({username: 'Jon Snow', content: 'Winter is here!'})
  .into('posts')
  .returning('*');

log('Running ...');
// Calling `.toString()` on a query will show the exact
// SQL that will be run by that query without executing it.
log(insertQuery.toString());
// To execute a query (send it to postgres), you must
// call query with `.then()`. Then, takes a callback
// that will receive the result of executing query when it is
// complete. Running queries in JavaScript is asynchonous
// like setTimeout.
insertQuery
  .then(result => log(result))
  .then(() => log(allPostsQuery.toString()))
  .then(() => allPostsQuery.then(result => log(result)));

// List all posts
const allPostsQuery = knex
  .select()
  .from('posts');







// bump
