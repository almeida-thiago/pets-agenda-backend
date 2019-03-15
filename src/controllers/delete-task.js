'use strict'

/** Models */
const taskModel = require('../models/task-model')

/** Delete task */
const deleteTask = async (data) => {
  try {
    await taskModel.deleteOne({ _id: data.id }) // Delete data in database
    return true
  } catch (error) {
    return false
  }
}

module.exports = deleteTask