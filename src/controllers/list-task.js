'use strict'

/** Models */
const taskModel = require('../models/task-model')

/** List task */
const listTask = async (data) => {
  try {
    const newData = { ...data, _pet: data.pet } // Ajust data
    delete newData.pet
    return await taskModel.find(newData) // Get data from database
  } catch (error) {
    return false
  }
}

module.exports = listTask