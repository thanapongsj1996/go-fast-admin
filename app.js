const express = require('express')
const app = express()
const ejs = require('ejs')

app.use(express.urlencoded({ extended: false }))
app.engine('html', ejs.renderFile)
app.listen(8081)

const router = require('./routes')
app.use(router) 

app.use(express.static('public'))

