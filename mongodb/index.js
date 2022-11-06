const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');

// Connection url;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database name
const dbName = 'e-comm';
async function main() {
    // Use the connect method to connect to the server.
    let connection = await client.connect();
    console.log("Connected successfully to the server");
    const db = connection.db(dbName);
    const collection = db.collection('products');
    const response = await collection.find({}).toArray();
    console.log(response);
}
main();
app.listen(5000, () => console.log("Listening on port 5000..."));