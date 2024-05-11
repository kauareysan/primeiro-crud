const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')
const app = express()

require('dotenv').config();

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send("hello world")
})

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log('Connected!'))
.catch(() => {
    console.log("connection failed")
})