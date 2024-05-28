const express = require('express')
const app = express()
app.use(express.json())  // não se esqueça disso 
const router = require('./router')
app.use(router)


module.exports = app