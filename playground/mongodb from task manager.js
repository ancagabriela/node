//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
//console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client) =>{
    if (error){
        return console.log('Unable to connect to database')
    }
    //console.log('Connected correctly')

    const db = client.db(databaseName)

    db.collection('users').findOne({name: 'Anca'}, (error, user) =>{
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(user)
    })
})



//Insert data to the db
// db.collection('users').insertOne({
    //     //_id: id,
    //     name: 'Anca',
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Ana',
    //         age: 34
    //     }, {
    //         name: 'Gustav',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })