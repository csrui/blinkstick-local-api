'use strict';

const Boom = require('@hapi/Boom')
const blinkstick = require('blinkstick')
const { allLeds, setColorAsync } = require('../helpers')

module.exports = function(request, h) {

    const device = blinkstick.findFirst()
    const position = request.params.position ? request.params.position : 'all';

    if (!device) {
        return Boom.resourceGone('Blinkstick not found')
    }

    if (request.method === 'post' ) {

        if (position === 'all') {
            allLeds(device, request.payload.color)
        } else {
            setColorAsync(device, request.payload.color, position);
        }
    }

    device.getColors(64, function(err, data) {
        return data;
    });
};