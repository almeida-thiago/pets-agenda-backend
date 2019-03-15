'use strict'

/** Models */
const petModel = require('../models/pet-model')

/** Create pet */
const createPet = async (data) => {
  try {
    await petModel.create(data) // Save data in database
    return true
  } catch (error) {
    return false
  }
}

module.exports = createPet