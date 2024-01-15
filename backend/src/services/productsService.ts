import { ProductDoc } from "../models/productModel";
import {
    getAllProducts as getAllProductsRep,
    getProductById as getProductByIdRep,
    createProduct as createProductRep,
    updateProduct as updateProductRep,
    deleteProduct as deleteProductRep
  } from "../repositories/productsRepository";
  
  const getAllProducts = async () => {
    return await getAllProductsRep();
  };
  
  const getProductById = async (productId: string) => {
    return await getProductByIdRep(productId);
  };
  
  const createProduct = async (newProduct: ProductDoc) => {
    return await createProductRep(newProduct);
  };
  
  const updateProduct = async (productId: string, updatedFields: Partial<ProductDoc>) => {
    return await updateProductRep(productId, updatedFields);
  };
  
  const updateAvailability = async (productId: string, newAvailability: boolean): Promise<ProductDoc | null> => {
    return await updateAvailability(productId, newAvailability);
  };
  
  const deleteProduct = async (productId: string) => {
    return await deleteProductRep(productId);
  };

  
  export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    updateAvailability
  };
  