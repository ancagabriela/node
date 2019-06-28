//const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


geocode('Barcelona', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    forecast(-75.7088, 44.1545, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
})





//Get weather
// const url = 'https://api.darksky.net/forecast/5102701e0bf0ea110131307238b76929/37.8267,-122.4233'    //key=value&otherKey=otherValue    ej: ?lang=es&units=si

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather service')
//     } else if (response.body.error){
//         console.log('unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain' )
//     }

//     //get the body of the request
//     // const data = JSON.parse(response.body)
//     // console.log(data.currently)
// })




// //Geocoding
// //Latitude and longitude 
// const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5jYWdtIiwiYSI6ImNqeGU0NTY0MDBqOWczbnM4YzhwcjE1OWUifQ.ulPdEfo0Av3PdCpjk089rA'

// request({url: url1, json: true}, (error, response) => {
//     if (error) {
//         console.log('unable to connect to location')
//     } else if (response.body.features.length === 0){
//         console.log('unable to find location. Try another search')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude )
//     }
// })







//Explanation for asynchronous 
// console.log('Starting')

// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)


// console.log('Stopping')