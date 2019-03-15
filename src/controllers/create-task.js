'use strict'

/** Models */
const taskModel = require('../models/task-model')

/** Create task */
const createTask = async (data) => {
  try {
    const newData = { ...data, _pet: data.pet } // Ajust data
    delete newData.pet
    await taskModel.create(newData) // Save data in database
    return true
  } catch (error) {
    return false
  }
}

module.exports = createTask