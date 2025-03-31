// migrate-mongo-config.js
require('dotenv').config()

const config = {
  mongodb: {
    // Use the environment variable from your docker-compose (or fallback to localhost)
    url: process.env.MONGO_URI || 'mongodb://mongodb:27017/contactmanager',
    databaseName: 'contactmanager',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  // Directory where migration scripts are stored
  migrationsDir: 'migrations',

  // The file extension for the migration scripts
  migrationFileExtension: '.js',

  // A template for new migrations (optional)
  // migrationFileTemplate: (filePath) => `// Migration: ${filePath}`,
}

module.exports = config
