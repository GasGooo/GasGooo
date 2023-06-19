const request = require('supertest')
const express = require("express");
const User = require('../model/User');
const { app, server, listen } = require("../server");

require("../config/db").connect();
require('dotenv').config();
const mongoose = require('mongoose').default;

describe('Login of unregistered user',  () => {
    it('should return a 404 status code', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                email: "unregistered@email.com",
                password: "password",
            })
        expect(res.statusCode).toBe(404)
    })
});

describe('Login of registered user',  () => {
   it('should return a 200 status code', async () => {
       //register a new user
       await User.deleteMany({ email: 'emailnuova' });
       await request(app)
           .post('/register')
           .send({
               name: "name",
               surname: "surname",
               email: "emailnuova",
               password: "password",
           });

       const res = await request(app)
           .post('/login')
           .send({
               email: "emailnuova",
               password: "password",
           })
       expect(res.statusCode).toBe(200)
   });
});

describe('Login of registered user with wrong password',  () => {
    it('should return a 418 status code', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                email: "emailnuova",
                password: "wrongpassword",
            })
        expect(res.statusCode).toBe(418)
    });
});

describe('Login without providing email and/or password',  () => {
    it('should return a 400 status code', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                email: "",
                password: "",
            })
        expect(res.statusCode).toBe(400)
    });
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