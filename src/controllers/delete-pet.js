'use strict'

/** Models */
const petModel = require('../models/pet-model')

/** Delete pet */
const deletePet = async (data) => {
  try {
    await petModel.deleteOne({ _id: data.id }) // Delete data in database
    return true
  } catch (error) {
    return false
  }
}

module.exports = deletePet