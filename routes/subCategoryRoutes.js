const subCategoryController = require("../controller/subCategoryController");
const router = require("express").Router();

//add category

router.post("/", subCategoryController.addSubCategory);
router.get("/", subCategoryController.getAllSubCategories);
router.get("/:id", subCategoryController.getASubCategory);
router.put("/:id", subCategoryController.updateASubCategory);

module.exports = router;