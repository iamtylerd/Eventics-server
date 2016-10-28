const { Router } = require('express')
const router = Router()
const user = require('../controllers/userCtrl')

router.get('/api/getEvents', user.getEvents)
router.get('/api/event/:id', user.sendEventPhotos)
// router.get('/api/users', user.getUsers)





module.exports = router
