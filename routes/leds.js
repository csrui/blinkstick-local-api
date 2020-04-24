'use strict';

const Boom = require('@hapi/Boom')
const blinkstick = require('blinkstick')
const device = blinkstick.findFirst()
const { allLeds, setColorAsync } = require('../helpers')

module.exports = function(request, h) {

    if (!device) {
        return Boom.resourceGone('Blinkstick not found')
    }

    if (request.method === 'post' ) {

        allLeds(device, request.payload.color)

        return request.payload
    }

    return {
        
    }
};