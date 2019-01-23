var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        minlength: 1,
        required: true,
        trim: true,
        type: String
    },
    completed: {
        default: false,
        type: Boolean
    },
    completedAt: {
        default: null,
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var newTodo = new Todo({
//     text: 'Eat dessert',
//     completed: false,
//     completedAt: 12345
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

var User = mongoose.model('User', {
    email: {
        minlength: 1,
        required: true,
        trim: true,
        type: String
    }
});

var newUser = new User({
    email: 'test@domain.com'
});

newUser.save().then((doc) => {
    console.log('User saved', JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save user', e);
});
