'use strict';

const blinkstick = require('blinkstick')

module.exports = (req, res) => {

    blinkstick.findAllSerials( (error, result) => {
        
        console.log(error, result);
        res.json(result);
    })
}