/**
 * Created by nigel.britton on 16/11/2016.
 */

module.exports = {
    _fourDigitString: function () {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },

    getRandomID: function () {
        return (this._fourDigitString() + this._fourDigitString() + "-" + this._fourDigitString() + "-4" + this._fourDigitString().substr(0,3) + "-" + this._fourDigitString() + "-" + this._fourDigitString() + this._fourDigitString() + this._fourDigitString()).toLowerCase();
    },

    getRandomName: function () {
        return 'Bob';
    },

    isGuid: function (str) {
        var slugPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        return slugPattern.test(str);
    },

    merge: function(obj1, obj2) {
        var obj3 = {};
        var attrname;
        if (null !== obj1 && null !== obj2) {
            for (attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        return false;
    }
};