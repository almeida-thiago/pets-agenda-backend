'use strict'

const router = require('express').Router() // Load express router
const verifyAuth = require('./verify-auth') // Verify autentication

/** Create user */
const createUser = (router) =>
  router.post('/user', async (req, res) => {
    const data = req.body
    const create = await require('./controllers/create-user')(data)
    const response = create ? { success: true } : { error: true, message: 'Erro on create data.' }
    res.send(response)
  })

/** Login user */
const loginUser = (router) =>
  router.post('/login', async (req, res) => {
    const data = req.body
    const login = await require('./controllers/login-user')(data)
    const response = login ? { success: true, login } : { error: true, message: 'Access denied.' }
    res.send(response)
  })

/** Create Pet */
const createPet = (router) =>
  router.post('/pet', verifyAuth, async (req, res) => {
    const data = req.body
    const create = await require('./controllers/create-pet')(data)
    const response = create ? { success: true } : { error: true, message: 'Erro on create data.' }
    res.send(response)
  })

/** List pets */
const listPet = (router) =>
  router.get('/pet', verifyAuth, async (req, res) => {
    const data = req.body
    const list = await require('./controllers/list-pet')(data)
    const response = list ? { success: true, data: list } : { error: true, message: 'Erro on list data.' }
    res.send(response)
  })

/** Create taks */
const createTask = (router) =>
  router.post('/task', verifyAuth, async (req, res) => {
    const data = req.body
    const create = await require('./controllers/create-task')(data)
    const response = create ? { success: true } : { error: true, message: 'Erro on create data.' }
    res.send(response)
  })

/** List tasks */
const listTask = (router) =>
  router.get('/task', verifyAuth, async (req, res) => {
    const data = req.body
    const list = await require('./controllers/list-task')(data)
    const response = list ? { success: true, data: list } : { error: true, message: 'Erro on list data.' }
    res.send(response)
  })

/** Delete task */
const deleteTask = (router) =>
  router.delete('/task', verifyAuth, async (req, res) => {
    const data = req.body
    const remove = await require('./controllers/delete-task')(data)
    const response = remove ? { success: true } : { error: true, message: 'Erro on delete data.' }
    res.send(response)
  })

/** Route error */
const routerError = (router) =>
  router.use((req, res, next) => {
    if (!req.route) throw new Error('Requested route not exists.') // Error message
    next()
  })

module.exports = [
  createUser(router),
  loginUser(router),
  createPet(router),
  listPet(router),
  createTask(router),
  listTask(router),
  deleteTask(router),
  routerError(router)
]
