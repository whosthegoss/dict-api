// Requiring express in our server
const express = require('express');
const app = express();
const cars = require('./cars.json')
const computers = require('./computers.json')


app.get('/cars', async (req, res) => {
    try {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(cars));
    } catch (error) {
        console.error('Error serving cars data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/computers', async (req, res) => {
    try {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(computers));
    } catch (error) {
        console.error('Error serving computers data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});