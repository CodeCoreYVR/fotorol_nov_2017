// Update with your config settings.

// Assigning values to `module.exports` allows code to
// be loaded with the `require` function. This is only
// possible in node. The value that is assigned to
// `module.exports` is the value that will be
// returned when this file is required (i.e. `require('./knexfile.js')`)

// knex will require this file to retrieve information about
// how it should configure itself. If nothing export, knex will
// know nothing about the db it's working with.
const sharedConfig = {
  client: 'postgresql',
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
}

module.exports = {

  development: {
    // `...` spread when used inside a object declaration will take
    // all properties of the object that follows `...` and add
    // to the object being declared. In this case, all properties
    // of `sharedConfig` are added to this object assigned to
    // `development` property.
    ...sharedConfig,
    connection: {
      database: 'fotorol_dev'
    }
  },

  staging: {
    ...sharedConfig,
    connection: {
      database: 'fotorol_staging'
    }
  },

  production: {
    ...sharedConfig,
    connection: {
      database: 'fotorol_production'
    }
  }

};
