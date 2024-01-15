import { Request, Response } from 'express';
import {
  getAllProducts as getAllProductsService,
  getProductById as getProductByIdService,
  createProduct as createProductService,
  updateProduct as updateProductService,
  updateAvailability as updateAvailabilityService, // Add the new service function
  deleteProduct as deleteProductService
} from '../services/productsService';

const getAllProductsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductByIdController = async (req: Request, res: Response): Promise<void> => {
  const productId = req.params.id;
  try {
    const product = await getProductByIdService(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createProductController = async (req: Request, res: Response): Promise<void> => {
  const newProduct = req.body;
  try {
    const createdProduct = await createProductService(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateProductController = async (req: Request, res: Response): Promise<void> => {
  const productId = req.params.id;
  const updatedFields = req.body;
  try {
    const updatedProduct = await updateProductService(productId, updatedFields);
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAvailabilityController = async (req: Request, res: Response): Promise<void> => {
  const productId = req.params.id;
  const updatedAvailability = req.body.availability;
  try {
    const updatedProduct = await updateAvailabilityService(productId, updatedAvailability);
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteProductController = async (req: Request, res: Response): Promise<void> => {
  const productId = req.params.id;
  try {
    await deleteProductService(productId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  updateAvailabilityController,
  deleteProductController
};
