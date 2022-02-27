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
    getACategory: async (req, res) => {
        try {
            const categories = await Category.findById(req.params.id).populate("subCategories");
            res.status(200).json(categories);
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
    },
    updateACategory: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            await Category.updateOne({ $set: req.body });
            res.status(200).json("update successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = categoryController;