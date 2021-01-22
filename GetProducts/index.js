const createMongoClient = require('../shared/mongoClient')

module.exports = async function (context, req) {
    const { client: MongoClient, closeConnectionDn } = await createMongoClient()
    const Products = MongoClient.collection('products'); //pega essa collection do banco

    const res = await Products.find({}) //pega tudo o que tem lá

    const body = await res.toArray() //converte em array para o mongo entender
  
    context.res = {
        status: 200,
        body
    }
};