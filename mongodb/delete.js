const dbConnect = require('./mongodb'); 

const deleteData = async() => {
    const db = await dbConnect();
    const result  = await db.deleteOne({name: 'Nokia'});
    console.log('result', result);
}
deleteData();