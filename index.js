const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')
const app = express()

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send("hello world")
})

mongoose.connect('mongodb+srv://kauby:kauasenha@cluster0.qjwsa3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected!'))
.catch(() => {
    console.log("connection failed")
})