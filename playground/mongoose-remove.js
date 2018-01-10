const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a546b136ff5870d161169a2').then((todo) => {
    console.log(todo)
})