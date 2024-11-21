const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// test data
const users = ["Bob", "Joe", "John"];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:name', (req, res) => {
    const params = req.params;
    
    if(!users.includes(params.name)){
        res.send('User ' + params.name + ' was not found!');
    }
    else{
        res.send('User ' + params.name + ' found!');
    }
});

module.exports = app; 

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}