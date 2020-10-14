const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.delete('/notes', function (req, res) {
    const no = req.query.no
    const getDb = db.get(no)
    if (getDb) {
        db.remove(no)
        res.send('The note has been deleted')
    } else (res.status(404).send('Sorry, the file does not exist'))
})

module.exports = app