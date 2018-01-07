const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
})

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    }, completed: {
        type: Boolean
    }, completedAt: {
        type: Number
    }
})

var otherTodo = new Todo({
    text: 'Eat breakfast',
    completed: true,
    completedAt: 123
})

otherTodo.save().then((res) => {
    console.log('Saved to Todo\n', JSON.stringify(res, undefined, 2))
}, (err) => {
    console.log('Unable to save to Todo\n', err)
})