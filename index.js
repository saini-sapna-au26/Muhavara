const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyparser = require("body-parser")


const productRoute = require("./routes/product");


mongoose
    .connect('mongodb+srv://chandra:chandra@cluster0.ipagt.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send("hello brothers")
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use("/api/products", productRoute);


app.listen( 8080, () => {
    console.log("Backend server is running!");
});