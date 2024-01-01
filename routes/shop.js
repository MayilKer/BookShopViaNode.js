const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const adminRoutes = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminRoutes.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
