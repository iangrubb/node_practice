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

    constructor(title) {
        this.title = title
    }

    save() {
        fetchProducts(products => {
            products.push(this)
            fs.writeFile(filePath, JSON.stringify(products), console.log)
        })
    }

    static all(callback) {
        fetchProducts(callback)
    }

}