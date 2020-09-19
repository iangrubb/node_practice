require('dotenv').config()

const express = require('express')
const app = express()



const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})




const mongoose = require('mongoose')

const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const routes = require('./app/routes')

app.use(routes)





app.listen(8080)




// const { mongoConnect } = require('./database')



// Sessions in mongoDB

// const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.yuejs.mongodb.net/shop`

// const store = new MongoDBStore({
//     uri: mongoURI,
//     collection: 'sessions'
// })




// app.use(session({secret: 'beef', resave: false, saveUninitialized: false, store: store}))


// app.use((req, res, next) => {
//     console.log("session" , req.session)

// })



// Connecting Mongoose

// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.yuejs.mongodb.net/shop?retryWrites=true&w=majority`)
// .then(result => {

//     // const product = new Product({title: "steak", description: "beef", price: 11.99, imageUrl: "test"})

//     // product.save().then(console.log)


//     // app.listen(3000)
// })



// Connecting MongoDB

// mongoConnect( client => {
    
//     const product = new Product({title: "steak", description: "beef", price: 11.99, imageUrl: "test"})

//     Product.fetchById('5f61499eda586262bf8866f0')
//     .then(console.log)

// })






// const sequelize = require('./database')
// const Product = require('./app/models/product')
// const User = require('./app/models/user')
// const Cart = require('./app/models/cart')
// const CartItem = require('./app/models/cart-item')

// Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
// User.hasMany(Product)
// User.hasOne(Cart)
// Cart.belongsTo(User)

// Cart.belongsToMany(Product, {through: CartItem})
// Product.belongsToMany(Cart, {through: CartItem})



// // Auto loads a default user
// app.use((req, res, next) => {
//     User.findByPk(1)
//     .then(user => {
//         req.user = user
//         next()
//     })  
// })








// sequelize.sync()
// .then(() => User.findByPk(1))
// .then(user => {
//     if (!user) {
//        return User.create({name: "Max", email: "beef"})
//     }
//     return user
// })
// .then(console.log)



// const beef = new Product({title: "Beef", price: 16.99, description: "It's beef.", imageUrl: "none"})

// beef.save().then(
//     () => Product.all().then(([rows]) => console.log(rows))
// )





// Product.find(3).then(([row]) => console.log(row))