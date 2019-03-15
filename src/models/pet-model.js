'use strict'

const mongoose = require('../database')

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specie: {
    type: String,
    enum: ['cat', 'dog', 'other'],
    lowercase: true,
    required: true
  },
  _user: {
    alias: 'user',
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

petSchema.pre('update', (next) => {
  this._updatedAt = new Date()
  this.__v = this.__v + 1
  next()
})

module.exports = mongoose.model('Pet', petSchema, 'pets')