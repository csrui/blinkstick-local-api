# Blinkstick Local API

Creates a local RESTy API to interact with a Blinkstick.

This allows you to easily integrate visual feedback on any kind of automation that can fire HTTP requests.

Examples:
* Change led color based on temperature.
* Blink the led red when the air quality is low.

## Requirements

It might work with other versions of Node but I have it running on a Raspberry PI Zero W with node v8.

* Node 8
* Express 4 - https://expressjs.com/
* Blinkstick - You can order from [this site](https://blinkstick.com).