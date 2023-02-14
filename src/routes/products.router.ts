import { Router } from 'express';
import index from '../controllers';
 
const { ProductsController } = index;

const productsRouter = Router();

productsRouter.post('/', ProductsController.insert);

productsRouter.get('/', ProductsController.read);

export default productsRouter;