const express = require('express')
// const { generate } = require('../utility/tokenGeneration')
const generate = require('../utility/tokenGeneration')
const router = express.Router()

router.get('/', async (req, res) => {
    console.log('hit server auth')
    try {
        if (!req.headers.xToken) {
            const number = generate()
            return res.json({ token: number }).status(200)
        }

    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router

