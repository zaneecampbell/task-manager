require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5c9982e07bb9a23be4bbedc6').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})