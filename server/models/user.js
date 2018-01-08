const mongoose = require('mongoose')

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

// For documentation:
// var newUser = new User({
//     email: 'aviedbachmid.ab@gmail.com'
// })

// newUser.save().then((res) => {
//     console.log('User Saved\n', JSON.stringify(res, undefined, 2))
// }, (err) => {
//     console.log('Unable to save user\n', err)
// })

module.exports = {User}