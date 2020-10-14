const express = require('express')
const db = require('../controller/dbController')
const app = express.Router()

app.get('/notes', function (req, res) {
    let result = db.getAll()
    res.send(result)
})

module.exports = app