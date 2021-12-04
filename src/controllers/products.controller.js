import Product from "../models/Products";

export const createProduct = async (req, res) => {
  const { name, category, price } = req.body;

  const newProducts = new Product({ name, category, price });
  const productssave = await newProducts.save();

  res.status(201).json(productssave);
};

export const getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const products = await Product.findById(req.params.productId);
  res.json(products);
};

export const updateProductsById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);

  res.status(204).json();
};
