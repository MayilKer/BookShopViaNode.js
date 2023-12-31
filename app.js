const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRouts = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.router);
app.use(shopRouts);

app.use((req, res, next) => {
  res.status(404).render("404" ,{ pageTitle: "Page Not Found", path:'' });
});

app.listen(3000);
