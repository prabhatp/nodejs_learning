const express = require('express');
const path = require('path');
const app = express();

//console.log(__dirname);
const html_path = path.join(__dirname, 'public');
//console.log(html_path);
// app.use(express.static(html_path));

app.get('', (req, res) => {
    res.sendFile(`${html_path}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${html_path}/about.html`);
});

app.get('/helpme', (req, res) => {
    res.sendFile(`${html_path}/help.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${html_path}/404.html`);
});

app.listen(5000, () => console.log("Listening..."))