'use strict';

const Boom = require('@hapi/Boom')
const blinkstick = require('blinkstick')
const device = blinkstick.findFirst()

module.exports = function (request, h) {

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