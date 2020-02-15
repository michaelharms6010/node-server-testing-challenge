const db = require('../data/db-config')

module.exports = { 
    insert,
    remove,
    getAll,
    findById,
    update
}

async function insert(quote) {
    return db('quotes').insert(quote).returning("*")
}
function findById(id) {
    return db('quotes')
        .where({id})
        .first()
}

function update(changes, id) {
    return db('quotes')
        .where({id})
        .update(changes)
        .then(ids => {
            return findById(id)
        })
}

function remove(id) {
    return db('quotes').where({id}).del()
        .then(ids => {
            return db('quotes')
        })
}

function getAll() {
    return db('quotes')
}