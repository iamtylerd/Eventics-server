const { Router } = require('express')
const router = Router()
const user = require('../controllers/userCtrl')

router.post('/api/user/photo/:id', user.photo)
router.get('/api/getEvents', user.getEvents)
router.get('/api/event/:id', user.sendEventPhotos)





module.exports = router
