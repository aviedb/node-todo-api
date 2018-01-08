const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = '6a537b9ffe89f76a2e4ef49f11'

if(!ObjectID.isValid(id)) {
    console.log('Id is invalid')
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(`Todos:\n${todos}`)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(`Todo:\n${todo}`)
// })

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found')
    }
    console.log(`Todo by Id:\n${todo}`)
}).catch((err) => {
    console.log(err)
})