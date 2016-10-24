const { Router } = require('express')
const router = Router()
const user = require('../controllers/userCtrl')

router.post('/api/user/photo/:id', user.photo)





module.exports = router
