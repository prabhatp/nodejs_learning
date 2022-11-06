const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

app.get('/', (req, res) => {
    res.send('Api called');
    event.emit('counterAPI');
});
let counter = 0;
event.on('counterAPI', () =>{
    console.log(counter++);
    console.log('Counter api called');
});

app.listen(5000, () => console.log('Listening on port 5000...'));