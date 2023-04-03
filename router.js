'use strict'

const Router = require('koa-router')
const router = new Router()

const noop = require('./api/noop')
const supply = require('./api/supply')

router.get('/supply/circulating', supply.circulatingSupply)
router.get('/supply/circulating-adjusted', supply.circulatingSupplyAdjusted)
router.get('/supply/total', supply.totalSupply)
router.get('/supply/total-adjusted', supply.totalSupplyAdjusted)
router.get('/supply/max', supply.maxSupply)

router.get('/', noop)

module.exports = router