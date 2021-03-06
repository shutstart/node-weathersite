const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0cf093d5da40107432762a3ccfb3da02/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)

        } else {
            callback(undefined,
                body.daily.data[0].summary + ' It is currently ' +
                body.currently.temperature + ' degrees out.' +
                'There is ' + body.currently.precipProbability + '% chance of rain.' +
                'Humidity:' + body.daily.data[0].humidity + '. High:' + body.daily.data[0].temperatureHigh +
                ', Low:' + body.daily.data[0].temperatureLow
            )
        }

    })
}


module.exports = forecast