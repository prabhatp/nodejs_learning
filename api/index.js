const express = require('express');
const mongdb = require('mongodb');
const dbConnect = require('./mongodb');

const app = express();

app.use(express.json()); // This is replacement of the body-parser. before express version 4.8 body parser was being used. 
app.get('/', async(req, res) => {
    const db = await dbConnect();
    const result = await db.find({}).toArray();
    console.log('result', result);
    // res.send({name: 'anil'});
    res.send(result);
});

app.post('/', async(req, res) => {
    console.log(req.body);
    //res.send(req.body);

    const db = await dbConnect();
    const result = await db.insertOne(req.body);
    res.send(result);
});

// app.put('/', async(req, res) => {
//     const db = await dbConnect();
//     const request = req.body;
//     const result = await db.updateOne({'name': request.name}, {$set:{request}});
//     res.send(result);
// });

app.put('/:name', async(req, res) => {
    const db = await dbConnect();
    const request = req.body;
    console.log({name: req.params.name});
    console.log(request);
    //res.send(req.params.name);
    const result = await db.updateOne({'name': req.params.name}, {$set:{request}});
    res.send(result);
});

app.delete('/:id', async(req, res) => {
    const db = await dbConnect();
    const result = await db.deleteOne({_id: new mongdb.ObjectId(req.params.id)});
    res.send(result);
});

app.listen(5000, () => console.log('Listening on the port 5000...'));