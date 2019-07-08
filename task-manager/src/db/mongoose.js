const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error', error)
// })