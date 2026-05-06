const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

const products = [
  {
    id: 1,
    name: "Shirt",
    price: 500,
    description: "Comfortable cotton shirt",
    category: "Clothing",
    image: "http://localhost:5000/images/shirt.webp"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1500,
    description: "Running shoes",
    category: "Footwear",
    image: "http://localhost:5000/images/shoes.jpeg"
  },
  {
    id: 3,
    name: "Watch",
    price: 2000,
    description: "Stylish wrist watch",
    category: "Accessories",
    image: "http://localhost:5000/images/watch.webp"
  }
];

let deals = [];
let orders = []; // simple mock

// ---------------- PRODUCTS ----------------

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ADD product (Admin)
app.post("/api/products", (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

// UPDATE product
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.map((p) =>
    p.id === id ? { ...p, ...req.body } : p
  );

  res.json({ message: "Updated" });
});

// DELETE product
app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((p) => p.id !== id);

  res.json({ message: "Deleted" });
});


// ---------------- DEALS ----------------

// GET deals
app.get("/api/deals", (req, res) => {
  res.json(deals);
});

// ADD deal
app.post("/api/deals", (req, res) => {
  const newDeal = { id: Date.now(), ...req.body };
  deals.push(newDeal);
  res.json(newDeal);
});


// ---------------- REPORT ----------------

app.get("/api/report", (req, res) => {
  res.json({
    totalProducts: products.length,
    totalDeals: deals.length,
    totalOrders: orders.length
  });
});


// ---------------- START SERVER ----------------

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});