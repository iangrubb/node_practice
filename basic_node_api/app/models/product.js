
const Sequelize = require('sequelize')

const sequelize = require('../../database')

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Product





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