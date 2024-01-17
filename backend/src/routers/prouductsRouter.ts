import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  updateAvailabilityController, 
  deleteProductController
} from '../controllers/productsController';

const router = Router();

router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.patch('/:id/availability', updateAvailabilityController); 
router.delete('/:id', deleteProductController);

export default router;
