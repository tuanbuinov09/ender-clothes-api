const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    //a father category has many subcategory
    subCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: false
    }]
})

const subCategorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    //1 subcategory has many product
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: false
    }],
    //1 subcategory has one father category
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
})

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        required: true
    },
    //a product has one (sub)category
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true
    }
})

let Product = mongoose.model("Product", productSchema);
let Category = mongoose.model("Category", categorySchema);
let SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = { Product, Category, SubCategory };
