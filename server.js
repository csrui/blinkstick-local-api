'use strict';

const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/info', require('./routes/info'))

app.all('/leds/:position/', require('./routes/leds'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// const Hapi = require('@hapi/hapi')

// const init = async () => {

//     const server = Hapi.server({
//         port: 3000,
//         host: 'localhost'
//     });

//     await server.register(require('./index'));

//     await server.start();
//     console.log('Server running on %s', server.info.uri);
// };
