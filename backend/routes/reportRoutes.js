const router = require("express").Router();
const Product = require("../models/Product");
const Deal = require("../models/Deal");

router.get("/", async (req, res) => {
  const totalProducts = await Product.countDocuments();
  const totalDeals = await Deal.countDocuments();

  res.json({
    totalProducts,
    totalDeals,
    totalOrders: 0 // mock
  });
});

module.exports = router;