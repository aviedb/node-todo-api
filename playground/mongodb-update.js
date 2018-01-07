const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a519da3330631e08390cd22')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log('Error', err)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a51a11b33ce3d2c179f5161')
    }, {
        $set: {
            name: 'Avied'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }, (err) => {
        console.log('Error', err)
    })

    db.close()
})