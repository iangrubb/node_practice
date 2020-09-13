const express = require('express')

const router = express.Router()

const path = require('path')

const rootDir = require('../util/path')

const products = []

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product'
    })
})

router.post('/product', (req, res, next) => {
    const { title } = req.body
    products.push({ title })
    res.redirect('/')
})

module.exports.adminRoutes = router
module.exports.products = products