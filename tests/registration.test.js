const request = require('supertest')
const express = require("express");
const User = require('../model/User');
const { app, server, listen } = require("../server");

require("../config/db").connect();
require('dotenv').config();
const mongoose = require('mongoose').default;

describe('User registration',  () => {
   it('should register a new user', async () => {
       await User.findOneAndDelete({ email: 'emailnuova' });
       const res = await request(app)
          .post('/register')
          .send({
             name: "name",
             surname: "surname",
             email: "emailnuova",
             password: "password",
          })
      expect(res.statusCode).toBe(201)
   })
})

describe('Registration of already registered user',  () => {
    it('should return a 409 status code', async () => {
        const res = await request(app)
            .post('/register')
            .send({
                name: "name",
                surname: "surname",
                email: "email",
                password: "password",
            })
        expect(res.statusCode).toBe(409)
    })
})

beforeAll(done => {
    done()
})

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close().then();
    done()
})


listen.close();