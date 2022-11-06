const express = require('express');
require('./config');

const Product = require('./product');

const app = express();
app.use(express.json())
app.post('/create', async(req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    res.send(result);
});

app.get('/list', async(req, res) => {
    let result = await Product.find({})
    res.send(result);
});

app.delete('/delete/:_id', async(req, res) => {
    let result = await Product.deleteOne(req.params);
    res.send(result);
});

app.put('/update/:_id', async(req, res) => {
    let result = await Product.updateOne(req.params, {$set:req.body});
    res.send(result);
});

app.get('/search/:key', async(req, res) => {
    let result = await Product.find(
        {
            "$or": [
                {name: {$regex: req.params.key}},
                {brand: {$regex: req.params.key}}
            ]
        });
    res.send(result);
});

app.listen(5000, () => console.log('Listening on port 5000...'));