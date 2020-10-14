const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ notes: [] })
    .write()

function getAll() {
    return db
        .get('notes')
        .value()
}

function get(id) {
    const parsedNo = parseInt(no)
    return db
        .get('notes')
        .find({ no: parsedNo })
        .value()
}

function add(body) {
    return db
        .get('notes')
        .push(body)
        .write()
}

function edit(body, no) {
    const parsedNo = parseInt(no)
    return db
        .get('notes')
        .find({ id: parsedNo })
        .assign(body)
        .write()
}

function remove(no) {
    const parsedNo = parseInt(no)
    return db
        .get('notes')
        .remove({ id: parsedId })
        .write()
}
module.exports = {
    getAll,
    get,
    add,
    edit,
    remove
}