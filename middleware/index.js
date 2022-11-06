const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    console.log('reqFilter');
    if (!req.query.age ) {
        res.send('Please provide age');
    } else if (req.query.age < 18) {
        res.send('You are not eligible user');
    } else {
        next();
    }
}
// Application level middleware
//app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

app.get('/users', reqFilter, (req, res) => {
    res.send('Welcome to the Users page');
});

app.listen(5000, () => console.log("Listening on port 5000"));