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
    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = productController;