'use strict'

const jwt = require('jsonwebtoken')

const verifyAuth = async (req, res, next) => {
  const token = req.headers.token
  try {    
    await jwt.verify(token, process.env.SECRET_KEY) // Verify token
    next()
  } catch (error) {    
    next(error)
  }
}

module.exports = verifyAuth