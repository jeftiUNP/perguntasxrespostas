const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/health', (req, res) => res.status(200).send("I'm ok!"));

module.exports = app;