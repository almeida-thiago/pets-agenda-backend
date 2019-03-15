'use strict'

/** Models */
const taskModel = require('../models/task-model')

/** List task */
const listTask = async (data) => {
  if (data.date) data.date = JSON.parse(data.date)
  console.log(data)
  try {
    const newData = { ...data, _pet: data.pet } // Ajust data
    delete newData.pet
    return await taskModel.find(newData).sort({ date: 'asc' }) // Get data from database
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = listTask