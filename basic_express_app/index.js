const express = require('express')

const app = express()

const { makeAbsolutePath } = require('./utils/path')

const bodyParser = require('body-parser')

const { detectRoutes } = require('./routes')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(makeAbsolutePath("public")))

detectRoutes(app)


app.listen(3000)