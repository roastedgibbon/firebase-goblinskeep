'use strict';

var utils = require('../util.js');

var KEEPER = KEEPER || {};

KEEPER.User = function () {
    this.RACE_TYPE = {
        GOBLIN: 0
    };
    this.RACE_NAMES = {
        GOBLIN: {
            FIRST: [
                'Fixibit',
                'Fizmaard',
                'Greexigle ',
                'Gizgelex',
                'Karax',
                'Kazqaeek',
                'Kizmamo',
                'Kwyinget',
                'Maeqeek',
                'Qiex',
                'Rezqables',
                'Roxriez',
                'Roxkixaz',
                'Soxgeez',
                'Wizget',
                'Zixteex',
                'Zotmemex',
                'Wieka',
                'Wizezx',
                'Zeexvmaz'
            ],
            LAST: [
                'Botwell',
                'Cogpot',
                'Deadfuse',
                'Farpocket',
                'Fizzgob',
                'Fizznose',
                'Greasyvolt',
                'Groundfuel',
                'Kneeblast',
                'Kneeskimmer',
                'Loosesnap',
                'Mangear',
                'Megabub',
                'Moneyfingers',
                'Moneyshatter',
                'Mudfuse',
                'Pepperblast',
                'Sandvolt',
                'Shadowfuse',
                'Saltbub'
            ]
        }
    }
};

KEEPER.User.prototype.constructor = KEEPER.User;

KEEPER.User.prototype.generateUser = function ( options ) {
    return utils.merge({
        auth: {
            token: utils.getRandomID(),
            expires: new Date().getTime() + (1000 * 60 * 60 * 24 * 365)
        },
        updated: new Date().getTime(),
        name: '',
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
    }, options);
};

KEEPER.User.prototype.generateRandomName = function ( options ) {
    if (!options) {
        options = {
            type: this.RACE_TYPE.GOBLIN
        };
    }
    switch (options.type) {
        case this.RACE_TYPE.GOBLIN:
            return this.RACE_NAMES.GOBLIN.FIRST[Math.floor(Math.random() * this.RACE_NAMES.GOBLIN.FIRST.length) - 1] +
                ' ' +
                this.RACE_NAMES.GOBLIN.LAST[Math.floor(Math.random() * this.RACE_NAMES.GOBLIN.LAST.length) - 1];
            break;
    }
    return '';
};

module.exports = new KEEPER.User();