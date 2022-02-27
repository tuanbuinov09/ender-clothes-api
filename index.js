const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const categoryRoute = require("./routes/categoryRoutes");
const subCategoryRoute = require("./routes/subCategoryRoutes");
const productRoute = require("./routes/productRoutes");
dotenv.config();

//Connect dtb
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("connected to mongodb...")
})

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.get("/hello", (req, res) => {
    res.status(200).json("helloworld");

})
//routes
app.use("/end-clothes/category", categoryRoute);
app.use("/end-clothes/sub-category", subCategoryRoute);
app.use("/end-clothes/product", productRoute);

app.listen(8000, () => {
    console.log("server is running...");
})