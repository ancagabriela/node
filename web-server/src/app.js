const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

//first page, directly from here
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')

// })

// app.get('/help', (req, res) =>{
//     res.send('Help page')
// })
// app.get('/about', (req,res) =>{
//     res.send('<h1>About us</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        location: 'Barcelona',
        forecast: 'Sunny'
    })
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('server using port 3000')
})