const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.get('/tasks', (req, res) => {
    res.json(Task.findAll());
});

router.get('/tasks/:id', (req, res) => {
    const task = Task.findById(parseInt(req.params.id));
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

router.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    const task = Task.create(title, description);
    res.status(201).json(task);
});

router.put('/tasks/:id', (req, res) => {
    const { title, description } = req.body;
    const task = Task.update(parseInt(req.params.id), title, description);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

router.delete('/tasks/:id', (req, res) => {
    const task = Task.delete(parseInt(req.params.id));
    if (task) {
        res.json({ message: 'Task deleted', task });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

module.exports = router;