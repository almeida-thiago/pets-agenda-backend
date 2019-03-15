'use strict'

/** Models */
const petModel = require('../models/pet-model')

/** List pet */
const listPet = async (data) => {
  try {
    const newData = { _user: data.user } // Ajust data
    return await petModel.find(newData) // Get data from database
  } catch (error) {
    return false
  }
}

module.exports = listPet