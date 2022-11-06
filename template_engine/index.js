const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: "Prabhat Kumar",
        age: 28,
        email: 'prabhakarprabhat523@gmail.com',
        skills: ['php', 'js', 'nodejs']
    }
    res.render('profile', {user});
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(5000, () => console.log("Listening on port 5000"));