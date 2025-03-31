const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv').config()
require('dotenv').config()
const mongoose = require('mongoose')

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/contactmanager'

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
})

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
