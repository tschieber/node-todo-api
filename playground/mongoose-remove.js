const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5c4e2908b238e6fca0730867'}).then((todo) => {

});

Todo.findByIdAndRemove('5c4e2908b238e6fca0730867').then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});
