const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    const product = req.body; //pega o body da requisição

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();

    const Products = MongoClient.collection('products');

    const res = await Products.insert(product);

    closeConnectionFn();

    context.res = {
        status: 201,
        body: res,
    };
};