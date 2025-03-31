const { MongoClient } = require('mongodb')

module.exports = {
  async up(db, client) {
    // Ensure the contacts collection exists (Mongoose might do this automatically on first save)
    await db.createCollection('contacts', {
      // You can define collection options here if needed
    })

    // Create an index on the email field for faster lookups
    await db.collection('contacts').createIndex({ email: 1 })
  },

  async down(db, client) {
    // If you want to be able to rollback, define the down function
    await db.collection('contacts').dropIndex('email_1')
    await db.collection('contacts').dropCollection('contacts')
  },
}
