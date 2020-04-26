'use strict';

const blinkstick = require('blinkstick')
const { allLeds, setColorAsync } = require('../helpers')

module.exports = function(req, res) {

    const device = blinkstick.findFirst()
    const position = req.params.position ? req.params.position : 'all'

    if (!device) {
        res.status(404).send('Blinkstick not found')
    }

    console.log(req.json, req.body, req.params, req.method)

    if (req.method === 'POST' ) {

        console.log('Coloring', position, req.body.color)

        if (position === 'all') {
            allLeds(device, req.body.color)
        } else {
            setColorAsync(device, req.body.color, position)
        }
    }

    res.json({
        position: position,
        color: req.body.color
    })

    // device.getColors(64, function(err, data) {
    //     console.log(err)
    //     res.json(data)
    // })
}