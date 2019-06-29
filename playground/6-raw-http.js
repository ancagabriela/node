const https = require('https')

const url = 'https://api.darksky.net/forecast/5102701e0bf0ea110131307238b76929/41,2?lang=es&units=si'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        console.log(chunk)
    })

    response.on('end', () => {

    })
})

request.end()