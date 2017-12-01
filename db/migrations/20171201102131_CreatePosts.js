
exports.up = function(knex, Promise) {
  // !IMPORTANT! You must always return the result from
  // a query in a migration. Otherwise, knex will not know when the migration
  // is complete and may freeze or fail.
  return knex.schema.createTable('posts', table => {
    // .increments creates a column that auto-increments, acts
    // as primary key. It takes one argument which is the name
    // of the column.
    table.increments('id');
    table.string('username');
    table.text('content');
    table.string('picture_path');
    // .timestamps creates 2 timestamp columns named `created_at`
    // and `updated_at` using the type `timestampz` (which includes the
    // time zone). Both fields will initially be set the time
    // when a row is created.
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};








// bump
