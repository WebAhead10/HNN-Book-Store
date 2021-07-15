const express = require("express")
const router = express.Router()

const homeHandler = require('./handlers/homeHandler')
const userHandler = require('./handlers/userHandler')
const errorHandler = require('./handlers/errorHandler')


router.get('/', homeHandler)
// router.post('/')
router.get('/user', userHandler)
router.get('/error', errorHandler)

module.exports = router