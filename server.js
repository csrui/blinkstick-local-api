'use strict';

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/info', require('./routes/info'))
app.all('/leds/:position', require('./routes/leds'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))