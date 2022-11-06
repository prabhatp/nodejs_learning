const mongoose = require('mongoose');
const main = async() => {
    await mongoose.connect('mongodb://localhost:27017/e-comm');
}
const ProductSchema = new  mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    Category: String
});

const saveInDB = async() => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    const data = new ProductsModel({name: 'Apple', price: 30000}); 
    const result = await data.save();
    console.log(result);
} 
main();
// saveInDB();

const updateInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {
            name: "Apple",
        }, 
        {
            $set:{name:'Iphone 11', price: 50000}
        });
    console.log(data);
}
// updateInDB();

const deleteInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name: "Iphone 11"});
    console.log(data);
} 
// deleteInDB();


const findInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    const data = await Product.find({ name: 'Moto G'});
    console.log(data);
}

findInDB();