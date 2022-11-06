const dbConnect = require('./mongodb');

const updateData = async() => {
    const db = await dbConnect();
    let result = await db.updateOne({'name': "Nokia"}, {$set:{'price': 15000}});
    console.log('result', result);
}
updateData();