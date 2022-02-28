const { Product, Category, SubCategory } = require("../model/model");

const productController = {
    addProduct: async (req, res) => {
        try {
            const product = new Product(req.body);
            const savedProduct = await product.save();
            if (req.body.subCategory) {
                const subCategory = await SubCategory.findById(req.body.subCategory);
                await subCategory.updateOne({ $push: { products: savedProduct._id } })
            }
            res.status(200).json(savedProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id).populate("subCategory");
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateAProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            await product.updateOne({ $set: req.body });
            res.status(200).json("update successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteAProduct: async (req, res) => {
        try {
            await SubCategory.updateMany(
                { products: req.params.id },
                { $pull: { products: req.params.id } });
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = productController;