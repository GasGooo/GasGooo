const request = require('supertest')
const express = require("express");
const User = require('../model/User');
const { app, server, listen } = require("../server");

require("../config/db").connect();
require('dotenv').config();
const mongoose = require('mongoose').default;

describe('Search user',  () => {
    it('should search an existing user', async () => {
        let res = await request(app)
            .get('/user/email').expect(200)
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