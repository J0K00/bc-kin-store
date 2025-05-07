const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pool = require('../config/db')

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { nom, email, password } = req.body

    // Vérifier si l'utilisateur existe déjà
    const [existingUsers] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    )

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' })
    }

    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Créer l'utilisateur
    const [result] = await pool.execute(
      'INSERT INTO users (nom, email, password) VALUES (?, ?, ?)',
      [nom, email, hashedPassword]
    )

    // Créer le token
    const token = jwt.sign(
      { userId: result.insertId },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.status(201).json({
      message: 'Inscription réussie',
      token,
      user: {
        id: result.insertId,
        nom,
        email
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur lors de l\'inscription' })
  }
})

// Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Vérifier si l'utilisateur existe
    const [users] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    )

    if (users.length === 0) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' })
    }

    const user = users[0]

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' })
    }

    // Créer le token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user.id,
        nom: user.nom,
        email: user.email
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur lors de la connexion' })
  }
})

module.exports = router 