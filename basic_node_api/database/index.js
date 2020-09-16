

const { MongoClient } = require('mongodb')

let _db;

const mongoConnect = (callback) => {

    MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.yuejs.mongodb.net/<dbname>?retryWrites=true&w=majority`, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB")
        _db = client.db()
        callback(client)
    })
    .catch(error => console.log("Failure to connect to MongoDB:", error))

}

const getDb = () => {
    if (_db) {
        return _db
    } else {
        return undefined
    }
}



module.exports.mongoConnect = mongoConnect
module.exports.getDb = getDb



// const Sequelize = require('sequelize')

// const sequelize = new Sequelize(
//     'basic_node_api_database',
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {dialect: 'mysql', host: process.env.DB_HOST}
// )

// module.exports = sequelize
