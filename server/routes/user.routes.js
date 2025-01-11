const { Router } = require('express')
const { userSignup, userLogin } = require('../controllers/user.controller')

const router = Router()

router.post('/signup', userSignup)
router.post('/login', userLogin)

module.exports = router