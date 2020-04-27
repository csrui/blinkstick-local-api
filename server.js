'use strict';

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/device', require('./routes/device_index'))
app.get('/device/:serial', require('./routes/device_view'))

app.all('/leds/:position', require('./routes/leds'))

// Start app
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))