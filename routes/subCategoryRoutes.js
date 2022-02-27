const subCategoryController = require("../controller/subCategoryController");
const router = require("express").Router();

//add category

router.post("/", subCategoryController.addSubCategory);
router.get("/", subCategoryController.getAllSubCategories);

// router.get("/", categoryController.getAllCategories);

module.exports = router;