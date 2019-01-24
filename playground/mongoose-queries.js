const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c4919861d762ba82e69ac13';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', JSON.stringify(todos, undefined, 2));
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

User.findById('5c47cc65dd2668841ebb31a3').then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User By Id', JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
