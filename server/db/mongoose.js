const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://aviedb:123Sembarang@ds249727.mlab.com:49727/todo-app-avied' || 'mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
})

module.exports = {mongoose}