const express = require('express');
const app = express();

// app.get('', (req, res) => {
//    // console.log('req', req);
//     //let name = req.querey;
//     console.log(req.query.name);
//     res.send('Hello, this is the home page'+ " query parameter value " + req.query.name);
// });

// app.get('/about', (req, res) => {
//     console.log('req', req);
//     res.send('Hello, this is the about page');
// });


// How to send the html and json data to the browser
app.get('', (req, res) => {
    res.send(`
    <h1>Welcom to home page
    </h1>
    <a href="/about?name=Prabhat">Go to about page</a>
    `)
});

app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="Enter name" value="${req.query.name}" />
    <button>Click me</button>
    <a href="/">Go to Home page</a>
    `);
});

app.listen(5000, () => console.log("Listening..."))