const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connet to database!')
    }

    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Homework'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
})

// add: insertOne, insertMany
// read: findOne, find
// update: update, updateMany
// delete: deleteOne, deleteMany