const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { 
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

// const me = new User({
//     name: 'Zane',
//     age: 27
// });

// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Homeowork',
    completed: false
});

task.save().then((task) => {
    console.log(task);
}).catch((e) => {
    console.log('Error', e)
})