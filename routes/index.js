'use strict';

const { Router } = require('express')
const router = Router ()
const User = require('../models/user')


router.use(require('./loginRoute'))

router.use(require('./userRoute'))
router.use(require('./eventRoute'))

module.exports = router;
