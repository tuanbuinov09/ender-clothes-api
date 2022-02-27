const categoryController = require("../controller/categoryController");
const router = require("express").Router();

//add category

router.post("/", categoryController.addCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getACategory);
router.put("/:id", categoryController.updateACategory);


module.exports = router;