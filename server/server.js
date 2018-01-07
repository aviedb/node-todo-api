const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
})

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, completed: {
        type: Boolean,
        default: false
    }, completedAt: {
        type: Number,
        default: null
    }
})

// var newTodo = new Todo({
//     text: 'Something to do',
// })

// newTodo.save().then((res) => {
//     console.log('Saved to Todo\n', JSON.stringify(res, undefined, 2))
// }, (err) => {
//     console.log('Unable to save to Todo\n', err)
// })

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        default: null
    }
})

var newUser = new User({
    email: 'aviedbachmid.ab@gmail.com'
})

newUser.save().then((res) => {
    console.log('User Saved\n', JSON.stringify(res, undefined, 2))
}, (err) => {
    console.log('Unable to save user\n', err)
})