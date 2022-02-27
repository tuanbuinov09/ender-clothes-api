const categoryController = require("../controller/categoryController");
const router = require("express").Router();

//add category

router.post("/", categoryController.addCategory);
router.get("/", categoryController.getAllCategories);

module.exports = router;