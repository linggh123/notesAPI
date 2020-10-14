const express = require('express')
const bodyParser = require('body-parser')

const getNotes = require('./routes/getNotes')
const editNotes = require('./routes/editNotes')
const deleteNotes = require('./routes/deleteNotes')
const addNotes = require('./routes/addNotes')


const app = express()
app.use(bodyParser.json())

app.use(getNotes)
app.use(editNotes)
app.use(deleteNotes)
app.use(addNotes)

// TODO 5. create a folder called "controller" and add a file called "dbController.js"
// TODO 5. pleace our db initiation codes inside "dbController.js" and export the db instance
// TODO 6. import dbController in all of our notes CRUD route handler files

app.get('/', (req, res) => {
    res.send('are you fckin kiddin me')
})

app.listen(3332, () => {
    console.log(`server is listening on http://localhost:3332`);
})