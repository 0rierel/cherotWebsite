import { Product, ProductDoc } from "../models/productModel";

//get
const getAllProducts = async (): Promise<ProductDoc[]> => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error: any) {
    throw new Error(`Failed to retrieve products: ${error.message}`);
  }
};

const getProductById = async (productId: string): Promise<ProductDoc | null> => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error: any) {
    throw new Error(`Failed to retrieve product: ${error.message}`);
  }
};
//post
const createProduct = async (newProduct: ProductDoc): Promise<ProductDoc> => {
  try {
    const createdProduct = await Product.create(newProduct);
    return createdProduct;
  } catch (error: any) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
};
//put
const updateProduct = async (productId: string, updatedFields: Partial<ProductDoc>): Promise<ProductDoc | null> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedFields, { new: true });
    return updatedProduct;
  } catch (error: any) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
};

//patch
const updateAvailability = async (productId: string, newAvailability: boolean): Promise<ProductDoc | null> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { availability: newAvailability },
      { new: true }
    );
    return updatedProduct;
  } catch (error: any) {
    throw new Error(`Failed to update availability: ${error.message}`);
  }
};
//delete
const deleteProduct = async (productId: string): Promise<void> => {
  try {
    await Product.findByIdAndDelete(productId);
  } catch (error: any) {
    throw new Error(`Failed to delete product: ${error.message}`);
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  updateAvailability
};