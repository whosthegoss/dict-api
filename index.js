// Requiring express in our server
const express = require('express');
const app = express();
const cars = require('./cars.json')
const computers = require('./computers.json')


app.get('/cars', async (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(cars));
})

app.get('/computers', async (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(computers));
})

app.listen(3000, function(req, res) {
console.log("Server is running at port 3000");
});
