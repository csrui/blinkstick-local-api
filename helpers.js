// TODO: Review helpers
// Code shamelessly borrowed from https://github.com/swissmanu/blinkstick-teamcity/blob/master/lib/blinkStick.js

const channel = 0

const setColorAsync = (device, color, index) => {
  const opts = { channel, index }
  return new Promise( (resolve, reject) => {
    device.setColor(color, opts, (err, result) => {
      if (!err) {
        resolve(result)
      } else {
        console.error(color, opts, err, result)
        reject(err, result)
      }
    })
  })
}

const allLeds = async (device, color) => {
  const result = []
  for (let index = 0; index < 8; index += 1) {
    const r = await setColorAsync(device, `${color}`, index)
    result.push(r)
  }
  return result
}

module.exports = {
  allLeds,
  setColorAsync
}