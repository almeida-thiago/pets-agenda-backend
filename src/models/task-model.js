'use strict'

const mongoose = require('../database')

const taskSchema = new mongoose.Schema({
  agenda: {
    type: String,
    lowercase: true,
    enum: ['food', 'beauty', 'verm', 'vacina', 'vet', 'other'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  _pet: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  _status: {
    type: Boolean,
    default: true
  },
  _createdAt: {
    type: Date,
    default: Date.now
  },
  _updatedAt: {
    type: Date,
    default: Date.now
  }
})

taskSchema.pre('update', (next) => {
  this._updatedAt = new Date()
  this.__v = this.__v + 1
  next()
})

module.exports = mongoose.model('Task', taskSchema, 'tasks')