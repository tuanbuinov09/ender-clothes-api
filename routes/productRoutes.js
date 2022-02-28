const productController = require("../controller/productController");
const router = require("express").Router();

//add category
router.post("/", productController.addProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getAProduct);
router.put("/:id", productController.updateAProduct);
router.delete("/:id", productController.deleteAProduct);

module.exports = router;