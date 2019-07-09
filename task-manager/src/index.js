const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//for GET requests the site is down
// app.use((req, res, next ) => {
//     if (req.method === "GET") {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
//     // console.log(req.method, req.path)
//     // next()
// })

//for all the requests the site is down
// app.use((req, res, next ) => {
//     res.status(503).send('Under Maintenance')
//         // console.log(req.method, req.path)
//         // next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//Without middleware: new request -> run route handler
//With middleware:    new request -> do something -> run route handler

// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is from router')
// })
// app.use(router)


app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})

//learning about .toJSON
// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () { 
//     return {}
// }
// console.log(JSON.stringify(pet))




//learning about jwt
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: "abc123" }, 'helloworldthisisworking', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'helloworldthisisworking')
//     console.log(data)
// }

// myFunction()
 


//learning about bcrypt
// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()


