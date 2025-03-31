const path = require('path')
require('dotenv').config()

const config = {
  mongodb: {
    url: process.env.MONGO_MIGRATE_URI || 'mongodb://mongodb:27017/contactmanager',
    databaseName: 'contactmanager',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  // Directory where migration scripts are stored
  migrationsDir: 'migrations',

  // File extension for migration files
  migrationFileExtension: '.js',

  // Explicitly set the migration template path to the default template provided by migrate-mongo
  migrationTemplatePath: path.join(__dirname, 'node_modules', 'migrate-mongo', 'templates', 'migrationTemplate.js'),
}

module.exports = config
