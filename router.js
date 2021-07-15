const express = require("express")
const router = express.Router()

const homeHandler = require('./handlers/homeHandler')
const userHandler = require('./handlers/userHandler')
const errorHandler = require('./handlers/errorHandler')
const {mainPageLayout, getAllBooks} = require('./handlers/mainPageHandler')


router.get('/', homeHandler)
router.post('/main', mainPageLayout)
router.get('/user', userHandler)
router.get('/error', errorHandler)
router.get('/data', getAllBooks)


module.exports = router