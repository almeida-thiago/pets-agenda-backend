'use strict'

const bcrypt = require('bcrypt')

/** Models */
const userModel = require('../models/user-model')

/** Create user */
const createUser = async (data) => {
  try {
    const hash = await bcrypt.hashSync(data.password, 10) // Create password hash
    const newData = { ...data, password: hash } // Ajust data
    const createdUser = await userModel.create(newData) // Save data in database
    return createdUser._id
  } catch (error) {
    return false
  }
}

module.exports = createUser