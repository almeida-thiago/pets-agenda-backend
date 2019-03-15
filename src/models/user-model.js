'use strict'

const mongoose = require('../database')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
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

userSchema.pre('update', (next) => {
  this._updatedAt = new Date()
  this.__v = this.__v + 1
  next()
})

module.exports = mongoose.model('User', userSchema, 'users')