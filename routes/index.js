'use strict';

const { Router } = require('express')
const router = Router ()
const User = require('../models/user')
// const multiparty = require('connect-multiparty')
// const multipartyMiddleware = multiparty();
// router.use(multipartyMiddleware);


router.use(require('./loginRoute'))
router.use(require('./userRoute'))

module.exports = router;
