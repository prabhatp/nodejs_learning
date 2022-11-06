const {MongoClient} = require('mongodb');
// Connection url;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database name
const dbName = 'e-comm';

async function dbConnect() {
    let connection = await client.connect();
    let db = connection.db(dbName);
    return db.collection('products');
}

module.exports = dbConnect;
