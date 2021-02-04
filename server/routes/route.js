const Router = require('express')

const router = new Router()

const voteRouter = require('./voteRouter')

router.use('/vote', voteRouter)

module.exports = router