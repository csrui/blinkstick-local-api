'use strict';

exports.plugin = {
    pkg: require('./package.json'),
    register: async function (server, options) {

        server.route({
            method: 'GET',
            path: '/info',
            handler: require('./routes/info')
        });

        server.route({
            method: ['GET', 'POST'],
            path: '/leds/{position?}',
            handler: require('./routes/leds')
        })
    }
};