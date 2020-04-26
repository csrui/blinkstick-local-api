'use strict';

const blinkstick = require('blinkstick')
const device = blinkstick.findFirst()

module.exports = function (req, res) {

    if (!device) {
        return Boom.resourceGone('Blinkstick not found')
    }

    device.getSerial(function(error, result) {

        console.log(error);
        return {
            Serial: result
        };
    });
};