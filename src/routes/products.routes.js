import { Router } from 'express'; // Import the Router object from express
import { getAll, getOne, insertProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';
const router = Router();
router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertProduct)
router.post('/:barcode',updateProduct)
router.post('/deleteProduct/:barcode',deleteProduct)
export default router;