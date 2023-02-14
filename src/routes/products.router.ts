import { Router } from 'express';
import index from '../controllers';
 
const { ProductsController } = index;

const productsRouter = Router();

productsRouter.post('/products', ProductsController.insert);

productsRouter.get('/products', ProductsController.read);

export default productsRouter;