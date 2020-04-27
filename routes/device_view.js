'use strict';

const blinkstick = require('blinkstick')

module.exports = (req, res) => {

    const device = blinkstick.findBySerial(req.params.serial)

    if (!device) {

        res.status(404).send('Blinkstick not found')
    }

    device.getSerial( (error, result) => {

        console.log(error, result);

        // TODO: Add more information to the response.
        res.json({
            serial: result
        })
    })
}