const { Router } = require('express')
const router = Router()
const user = require('../controllers/userCtrl')

router.post('/api/user/photo/:id', user.photo)
// router.get('/api/user/getUrl', user.getUrl)





module.exports = router
