const Router = require('express')

const router = new Router()
const VoteController = require('../controller/controller')
const LogController = require('../controller/logController')

router.post('/vote', VoteController.create, /*LogController.create*/)
router.get('/statistic', VoteController.getAll , /* LogController.create*/)

//router.post('/logs', LogController.create)



module.exports = router