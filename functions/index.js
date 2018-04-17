/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const app = express();

const keeperUser = require('./lib/keeper/keeper-user.js');

const utils = require('./lib/util.js');

app.use(cors);
app.use(cookieParser);

app.get('/user/:userId', (request, response) => {
    let documentUser = {
        auth: {
            token: utils.getRandomID(),
            expires: new Date().getTime() + (1000 * 60 * 60 * 24 * 365)
        },
        updated: new Date().getTime(),
        name: keeperUser.generateRandomName(),
        gold: 0,
        experience: 0,
        inventory: [],
        tasks: [],
        quests: [],
        skills: {
            Mining: {
                exp: 0,
                level: 1,
                unlocked: []
            },
            Logging: {
                exp: 0,
                level: 1,
                unlocked: []
            },
            Hunting: {
                exp: 0,
                level: 1,
                unlocked: []
            }
        }
    };
    response.json(documentUser);
});

app.post('/user', (request, response) => {
    let db = admin.firestore();
    let documentTableUsers = db.collection('users');
    let documentUser = {
        auth: {
            token: utils.getRandomID(),
            expires: new Date().getTime() + (1000 * 60 * 60 * 24 * 365)
        },
        updated: new Date().getTime(),
        name: keeperUser.generateRandomName(),
        gold: 0,
        experience: 0,
        inventory: [],
        tasks: [],
        quests: [],
        skills: {
            Mining: {
                exp: 0,
                level: 1,
                unlocked: []
            },
            Logging: {
                exp: 0,
                level: 1,
                unlocked: []
            },
            Hunting: {
                exp: 0,
                level: 1,
                unlocked: []
            }
        }
    };
    documentTableUsers.add(documentUser);
    response.json(documentUser);
});

exports.app = functions.https.onRequest(app);