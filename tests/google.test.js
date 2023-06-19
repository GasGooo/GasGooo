const request = require('supertest')
const express = require("express");
const User = require('../model/User');
const { app, server, listen } = require("../server");

require("../config/db").connect();
require('dotenv').config();
const mongoose = require('mongoose').default;

describe('GET request to /auth',  () => {
    it('should return a 200 status code', async () => {
        request(app)
            .get('/auth')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
            });

    })
});

describe('GET request to /auth/callback',  () => {
    it('should return a 400 status code', async () => {
        request(app)
            .get('/auth/callback')
            .expect(400)
            .end(function(err, res) {
                if (err) throw err;
            });

    })
});
