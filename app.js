const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Task API is running' });
});

module.exports = app;