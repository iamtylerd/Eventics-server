const { Router } = require('express')
const router = Router()
const event = require('../controllers/eventCtrl')

router.post('/api/event/new', event.create)
router.post('/api/event/photo/:id', event.photo)



module.exports = router
