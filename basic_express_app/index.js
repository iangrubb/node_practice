const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log("Middleware")
    next()
})

app.use((req, res, next) => {
    console.log("Middleware 2")
    res.send('<h1>Hello World</h1>')
})

app.listen()