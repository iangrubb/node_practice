require('dotenv').config()

const express = require('express')
const app = express()

const sequelize = require('./database')
const Product = require('./app/models/product')
const User = require('./app/models/user')
const Cart = require('./app/models/cart')
const CartItem = require('./app/models/cart-item')

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User)

Cart.belongsToMany(Product, {through: CartItem})
Product.belongsToMany(Cart, {through: CartItem})



// Auto loads a default user
app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user
        next()
    })  
})








sequelize.sync()
.then(() => User.findByPk(1))
.then(user => {
    if (!user) {
       return User.create({name: "Max", email: "beef"})
    }
    return user
})
.then(console.log)



// const beef = new Product({title: "Beef", price: 16.99, description: "It's beef.", imageUrl: "none"})

// beef.save().then(
//     () => Product.all().then(([rows]) => console.log(rows))
// )





// Product.find(3).then(([row]) => console.log(row))