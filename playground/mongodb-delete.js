const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    // deleteOne
    // db.collection('Users').deleteOne({age: 18}).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log('Error', err)
    // })

    // deleteMany
    // db.collection('Users').deleteMany({age: 18}).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log('Error', err)
    // })
    
    // findOneAndDelete
    // db.collection('Users').findOneAndDelete({location: 'malang'}).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log('Error', err)
    // })

    db.close()
})