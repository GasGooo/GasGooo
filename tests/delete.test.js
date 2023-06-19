const request = require('supertest')
const express = require("express");
const User = require('../model/User');
const { app, server, listen } = require("../server");

require("../config/db").connect();
require('dotenv').config();
const mongoose = require('mongoose').default;

describe('Delete account',  () => {
    it('should delete an existing user', async () => {
        await User.findOneAndDelete({ email: 'emailnuova' });
        await request(app)
            .post('/register')
            .send({
                name: "name",
                surname: "surname",
                email: "emailnuova",
                password: "password",
            })
        const res = await request(app)
            .delete('/user/delete/emailnuova')
        expect(res.statusCode).toBe(200)
    });
});

describe('Delete account of a non existing user',  () => {
    it('should return a 404 status code', async () => {
        const res = await request(app).delete('/user/delete/nonexistingmail');
            console.log(res.statusCode);
        expect(res.statusCode).toBe(404)

    })
});

beforeAll(done => {
    done()
})

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close().then();
    done()
})

listen.close();