require('dotenv').config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Une erreur est survenue' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`)
}) 