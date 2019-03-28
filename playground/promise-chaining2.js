require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c9982e07bb9a23be4bbedc6').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTakeAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id) // doesnt have to be saved in variable if you dont need could just start with await
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTakeAndCount('5c9aff7f4662e724e8ab982e').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e)
})

// 5c9aff7f4662e724e8ab982e