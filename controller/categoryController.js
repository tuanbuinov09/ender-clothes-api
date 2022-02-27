const { Product, Category, SubCategory } = require("../model/model");

const categoryController = {
    addCategory: async (req, res) => {
        try {
            const category = new Category(req.body);
            const savedCategory = await category.save();
            res.status(200).json(savedCategory);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = categoryController;