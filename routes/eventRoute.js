const { Router } = require('express')
const router = Router()
const event = require('../controllers/eventCtrl')

router.post('/api/event/new', user.create)


module.exports = router
