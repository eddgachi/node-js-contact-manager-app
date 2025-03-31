const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler')
const contactRoutes = require('./routes/contactRoutes') // Import contact routes

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/contactmanager'
const port = process.env.PORT || 5000

// Connect to MongoDB
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

const app = express()

// Middleware to parse JSON request bodies
app.use(express.json())

// Routes for contacts
app.use('/api/contacts', contactRoutes)

// Basic health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Contact Manager API is running...' })
})

// Error handling middleware (should be the last app.use)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
