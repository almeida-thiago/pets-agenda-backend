'use strict'

const jwt = require('jsonwebtoken')

/** Login revalidate */
const loginRevalidate = async (data, req) => {
  const id = data.user
  const token = req.headers.token
  try {    
    await jwt.verify(token, process.env.SECRET_KEY) // Verify token
    const newToken = await jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '1h' }) // Retrun token
    return newToken
  } catch (error) {    
    return false
  }
}

module.exports = loginRevalidate