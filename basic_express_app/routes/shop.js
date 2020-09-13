const express = require('express')

const router = express.Router()

const path = require('path')
const rootDir = require('../util/path')

const { products } = require('./admin')

router.get('/', (req, res, next) => {
    res.render('shop', {
        products,
        pageTitle: 'Shop',
        path: '/'
    })
})

module.exports = router