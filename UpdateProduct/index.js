const {ObjectID} = require('mongodb')
const createMongoclient = require('../shared/mongoClient')

module.exports = async function (context, req) {
    const {id} = req.params;
    const product = req.body;

    const {client: MongoClient, closeConnectionFn } = await createMongoclient();

    const Products = MongoClient.collection('products');
    const res = await Products.findOneAndUpdate(
        {_id: ObjectID(id)},
        {$set: product}, //operador do mongo para setar o documento
        );

    closeConnectionFn();

    context.res = {
        status: 200,
        body: res
    }

};