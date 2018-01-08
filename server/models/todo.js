const mongoose = require('mongoose')

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

// For documentation:
// var newTodo = new Todo({
//     text: 'Something to do',
// })

// newTodo.save().then((res) => {
//     console.log('Saved to Todo\n', JSON.stringify(res, undefined, 2))
// }, (err) => {
//     console.log('Unable to save to Todo\n', err)
// })

module.exports = {Todo}