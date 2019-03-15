'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/** Models */
const userModel = require('../models/user-model')

/** Login user */
const loginUser = async (data) => {
  try {
    const dataBase = await userModel.findOne({ username: data.username }) // Get password hash
    const confirmPassword = bcrypt.compareSync(data.password, dataBase.password) // Chech password hash
    if (!confirmPassword) return false
    return jwt.sign({ id: dataBase._id }, process.env.SECRET_KEY, { expiresIn: '1h' }) // Retrun token
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = loginUser