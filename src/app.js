const express = require('express');
const todosRouter = require('./routes/todos');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api/todos', todosRouter);

module.exports = app;
