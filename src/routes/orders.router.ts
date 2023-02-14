import { Router } from 'express';
import index from '../controllers';
 
const { OrdersController } = index;

const usersRouter = Router();

usersRouter.get('/', OrdersController.read);

export default usersRouter;