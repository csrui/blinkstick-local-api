'use strict';

const blinkstick = require('blinkstick')
const device = blinkstick.findFirst()

module.exports = function (req, res) {

    if (!device) {
        res.status(404).send('Blinkstick not found')
    }

    device.getSerial(function(error, result) {

        console.log(error, result);
        res.json({
            Serial: result
        })
    })
}