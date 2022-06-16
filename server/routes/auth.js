const express = require('express')

const router = express.Router()

//import controller methods
const {login} =  require('../controllers/auth.js')
const {register} = require('../controllers/auth')

router.post('/login', login) 
router.post('/register', register)


module.exports = router