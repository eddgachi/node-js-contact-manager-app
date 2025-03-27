const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
})

app.use('/api/contacts', require('./routes/contactRoutes'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
