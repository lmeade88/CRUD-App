const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from the Node API Server")
});

app.post("/api/products", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
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