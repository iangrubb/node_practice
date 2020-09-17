
const { Schema, model } = require('mongoose')


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }

})


module.exports = model('Product', productSchema)





// Vanilla MongoDB Setup

// const { ObjectId } = require('mongodb')
// const { getDb } = require('../../database')

// class Product {
//     constructor({title, price, description, imageUrl}){
//         this.title = title
//         this.price = price
//         this.description = description
//         this.imageUrl = imageUrl
//     }

//     save() {
//         const db = getDb()
//         return db.collection('products').insertOne(this)
//     }

//     static fetchAll() {
//         // Just db.collection('products').find() returns a cursor, use toArray() to get an array
//         const db = getDb()
//         return db.collection('products').find().toArray()
//     }

//     static fetchById(id) {
//         const db = getDb()
//         return db.collection('products').find({_id: new ObjectId(id)}).next()
//     }
// }

// module.exports = Product




// Sequelize Setup

// const Sequelize = require('sequelize')

// const sequelize = require('../../database')

// const Product = sequelize.define('product', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     title: Sequelize.STRING,
//     price: {
//         type: Sequelize.DOUBLE,
//         allowNull: false
//     },
//     imageUrl: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     description: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
// })

// module.exports = Product





// Vanilla MySQL setup

// const db = require('../../database')

// module.exports = class Product {

//     constructor({id, title, price, description, imageUrl}) {
//         this.id = id
//         this.title = title
//         this.price = price
//         this.description = description
//         this.imageUrl = imageUrl
//     }

//     save() {
//         return db.execute(
//             'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
//             [this.title, this.price, this.imageUrl, this.description]
//         )
//     }

//     static find(id) {
//         return db.execute('SELECT * FROM products WHERE id = ?', [id])
//     }

//     static all() {
//         return db.execute('SELECT * FROM products')
//     }

// }