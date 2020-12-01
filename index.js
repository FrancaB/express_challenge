const express = require('express');
const bodyParser = require ('body-parser');

const app = express();

app.use (bodyParser());

app.get ('/login', (request,response) => {
    console.log (request);
    const userData = require("./user.json")
    response.json (userData);
})

app.post('/login', (request,response) => {
    console.log (request);
    const requestBody = request.body;
    console.log(requestBody)
    response.send ({action: "login", message: "Welcome", body: requestBody}) ;
})

app.delete('/login', (request,response) => {
    const user = require('./user.json');
    const deleteUser = user.pop()
    response.send(deleteUser);
})

app.listen(3000, () => {
    console.log ("App is running")
})