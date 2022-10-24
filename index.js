const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const mongoose = require("mongoose");

const Product = require("./models/product");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/farmStand");
    console.log("Connection open!");
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("products/index", { products })
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})