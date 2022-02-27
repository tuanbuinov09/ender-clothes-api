const productController = require("../controller/productController");
const router = require("express").Router();

//add category
router.post("/", productController.addProduct);
router.get("/", productController.getAllProduct);

module.exports = router;