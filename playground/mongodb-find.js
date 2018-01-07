// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos:')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch data from Todos', err)
    // })

    // db.collection('Users').insertOne({
    //     name: 'Zakwan',
    //     age: 18,
    //     location: 'Medan'
    // }, (err, results) => {
    //     if(err) {
    //         return console.log('Unable to insert user.', err)
    //     }

    //     console.log(JSON.stringify(results.ops, undefined, 2))
    // })

    db.collection('Users').find({location: 'Medan'}).toArray().then((docs) => {
        console.log('Users:')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to detch data from Users.' , err)
    })

    db.close()
})