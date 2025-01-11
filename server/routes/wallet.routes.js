const { Router } = require('express')
const { addAmount, deductAmount } = require('../controllers/wallet.controller')

const router = Router()

router.post('/addWallet', addAmount)
router.post('/deductWallet', deductAmount)

module.exports = router