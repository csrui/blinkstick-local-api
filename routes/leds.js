'use strict';

const blinkstick = require('blinkstick')
const { allLeds, setColorAsync } = require('../helpers')

module.exports = function(req, res) {

    const device = blinkstick.findFirst()
    const position = req.params.position ? req.params.position : 'all'

    if (!device) {
        res.status(404).send('Blinkstick not found')
    }

    if (req.method === 'post' ) {

        if (position === 'all') {
            allLeds(device, req.payload.color)
        } else {
            setColorAsync(device, req.payload.color, position)
        }
    }

    device.getColors(64, function(err, data) {
        console.log(err)
        res.json(data)
    })
}