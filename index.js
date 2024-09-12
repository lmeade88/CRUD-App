const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Hello from the Node API Server")
});


mongoose.connect('mongodb+srv://admin:mr8YJCoGWeokENB1@backenddb.5tekg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to database yo!');
    app.listen(3000, () => {
        console.log("Server is runnin' on port 3000 yo!");
    });
  })
  .catch(() => {
    console.log("Connection failed.")
  });