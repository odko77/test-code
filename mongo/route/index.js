const express = require('express')
const router = express.Router()

const testApp = require("../apps/test")

router.route("/")
    .get(testApp.test)

module.exports = router
