const express = require('express');

const app = express();
const PORT = 3000;

// Read incoming JSON
app.use(express.json());

// Log every request
app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.originalUrl);
    next();
});

// Starting data
let resources = [
    { id: 1, name: 'Homework', completed: false },
    { id: 2, name: 'Study', completed: false }
];

let nextId = 3;

// GET all resources
app.get('/api/resources', (req, res) => {
    res.status(200).json(resources);
});

// GET one resource
app.get('/api/resources/:id', (req, res) => {
    const resource = resources.find(item => item.id === Number(req.params.id));

    if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
    }

    res.status(200).json(resource);
});

// POST a new resource
app.post('/api/resources', (req, res) => {
    const resource = {
        id: nextId++,
        name: req.body.name,
        completed: req.body.completed ?? false
    };

    resources.push(resource);

    res.status(201).json(resource);
});

// PUT: update a resource
app.put('/api/resources/:id', (req, res) => {
    const resource = resources.find(item => item.id === Number(req.params.id));

    if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
    }

    if (req.body.name !== undefined) {
        resource.name = req.body.name;
    }

    if (req.body.completed !== undefined) {
        resource.completed = req.body.completed;
    }

    res.status(200).json(resource);
});

// DELETE a resource
app.delete('/api/resources/:id', (req, res) => {
    const index = resources.findIndex(item => item.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Resource not found' });
    }

    const deletedResource = resources.splice(index, 1)[0];

    res.status(200).json({
        message: 'Resource deleted successfully',
        resource: deletedResource
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});