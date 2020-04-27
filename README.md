# Blinkstick Local API

Creates a local RESTy API to interact with a Blinkstick.

This allows you to easily integrate visual feedback on any kind of automation that can fire HTTP requests.

Examples:
* Change led color based on temperature.
* Blink the led red when the air quality is low.

## Requirements

It might work with other versions of Node but I have it running on a Raspberry PI Zero W with Raspbian Buster and node v8.

* Node 8
* Express 4 - https://expressjs.com/
* Blinkstick - You can order from [this site](https://blinkstick.com).

## Setup

Clone the repo and then run the following commands to run the API on default port 3000.

```
npm install
node server.js
```

If all goes well, we all know that there's always kinks to iron out you should open a browser tab with http://localhost:3000/info and get your device serial number as a response.

## Permission problems

If you get an error message on Linux:

```
Error: cannot open device with path /dev/hidraw0
```

Please run the following command and restart your computer:
```
echo "KERNEL==\"hidraw*\", SUBSYSTEM==\"hidraw\", ATTRS{idVendor}==\"20a0\", ATTRS{idProduct}==\"41e5\", MODE=\"0666\"" | sudo tee /etc/udev/rules.d/85-blinkstick-hid.rules
```
