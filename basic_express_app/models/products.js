const Cart = require('./cart')

const fs = require('fs')
const { makeAbsolutePath } = require('../utils/path')

const filePath = makeAbsolutePath('data','products.json')

const fetchProducts = (callback) => {
    fs.readFile(filePath, (error, content) => {
        if (error) {
            callback([])
        } else {
            callback(JSON.parse(content))
        }
        
    })
}


module.exports = class Product {

    constructor({ title, imageUrl, description, price, id }) {
        this.id = id ? id : Math.random().toString()
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }

    save() {
        fetchProducts(products => {

            const oldProduct = products.find(product => product.id === this.id)

            if (oldProduct){
                products = products.map(product => {
                    if (product.id === this.id) {
                        return this
                    } else {
                        return product
                    }
                })
            } else {
                products.push(this)
            }
            fs.writeFile(filePath, JSON.stringify(products), console.log)
        })
    }

    static delete(id) {
        fetchProducts(products => {
            const new_products = products.filter(product => product.id !== id)
            fs.writeFile(filePath, JSON.stringify(new_products), console.log)
            Cart.removeProduct(id)
        })
    }

    static all(callback) {
        fetchProducts(callback)
    }

    static find(id, callback) {
        fetchProducts(products => {
           const product = products.find(product => product.id === id)
            callback(product)
        })
    }

}