const { ObjectID } = require('mongodb') //para transformar os ID's em objetos do mongo
const createMongoClient = require('../shared/mongoClient')

module.exports = async function (context, req) {
 const {id} = req.params;

 const { client: MongoClient, closeConnectionFn } = await createMongoClient();

 const Products = MongoClient.collection('products');
 const res = await Products.findOne({_id: ObjectID(id)}); //indicação que o id que tiver no banco vai ser o convertido

 closeConnectionFn();
 context.res = {
     status: 200,
     body: res
 }
};