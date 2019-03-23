const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connet to database!')
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID('5c967c2cf7383827e028792b') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ name: 'Zane' }).toArray((error, users) => {
    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID('5c967f63f179fe2c94109362')}, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task);
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch.')
        }

        console.log(tasks);
    })
})

// add: insertOne, insertMany
// read: find,