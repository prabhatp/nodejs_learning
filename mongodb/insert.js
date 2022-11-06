const dbConnect = require('./mongodb');
const insert  = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({
        name: 'Moto G', price: 20000
    });
    console.log('db', db);
    console.log('result', result);
}
insert();