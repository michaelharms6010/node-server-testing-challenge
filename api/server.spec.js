const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config')

describe('server.js tests', () => {

    //clear test db before each test
    beforeEach(async () => {
        await db('quotes').truncate()
    })

    describe('GET /quotes', () => {
        it('should return list of quotes', () => {
            return request(server)
                .get('/quotes')
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toBe('application/json')
                    expect(res.body.length).toBe(0)
                })
        })
    })
})