import Product from '../models/Products';

export const createProduct = async (req, res) => {

    const {name, category, price, imgURL} = req.body;

    const newProduct = new Product({name, category, price, imgURL});

    const productSaved = await newProduct.save();

    res.status(201).json({
        productSaved
    });
};

export const getProducts = async (req, res) => {

    const products = await Product.find();
    
    res.status(200).json({
        products
    })
};

export const getProductById = async (req, res) => {
    const productById = await Product.findById(req.params.productId);

    res.status(201).json({
        productById
    })
};

export const updateProductById = (req, res) => {

};

export const deleteProductById = (req, res) => {

};