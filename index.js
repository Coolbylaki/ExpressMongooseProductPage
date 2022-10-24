const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/movieApp")
    console.log("Connection open!")
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/test", (req, res) => {
    res.send("Testing");
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})