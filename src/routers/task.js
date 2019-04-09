const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
        } catch (e) {
            res.status(400).send(e)
        }
});

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=10 important
router.get('/tasks', auth, async (req, res) => {
    match = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    try {
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip)
            }                                                // alternate answer
        }).execPopulate()                                    // const tasks = await Task.find({owner: req.user._id})
        res.send(req.user.tasks)                             // res.status(201).send(tasks) 
    } catch (e) {
        res.status(500).send()
    }
});

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })
        
        if (!task) {
            return res.status(404).send()
        }

        res.status(201).send(task)
    } catch (e) {
        res.status(500).send()
    }
});

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["description", "completed"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: "invalid updates" })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})

        if (!task) {
            return status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        return res.status(500).send(e)
    }
})

module.exports = router

