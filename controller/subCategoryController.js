const { Product, Category, SubCategory } = require("../model/model");

const subCategoryController = {
    addSubCategory: async (req, res) => {
        try {
            const subCategory = new SubCategory(req.body);
            const savedSubCategory = await subCategory.save();
            if (req.body.category) {
                // const category = Category.find({ _id: req.body.category})
                const category = await Category.findById(req.body.category);
                await category.updateOne({ $push: { subCategories: savedSubCategory._id } })
            }
            res.status(200).json(savedSubCategory);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getASubCategory: async (req, res) => {
        try {
            const subCategory = await SubCategory.findById(req.params.id).populate("category").populate("products");
            res.status(200).json(subCategory);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    ,
    getAllSubCategories: async (req, res) => {
        try {
            const subCategories = await SubCategory.find();
            res.status(200).json(subCategories);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateASubCategory: async (req, res) => {
        try {
            const subCategory = await SubCategory.findById(req.params.id);
            await subCategory.updateOne({ $set: req.body });
            res.status(200).json("update successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteASubCategory: async (req, res) => {
        try {
            await Category.updateMany(
                { subCategories: req.params.id },
                { $pull: { subCategories: req.params.id } });
            await Product.updateMany(
                { subCategory: req.params.id },
                { subCategory: null });
            await SubCategory.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //qywriuq3rhwqthhewqbrjhwqt]
    //qiuwtihqwtouqtoqhtohqto
}

module.exports = subCategoryController;