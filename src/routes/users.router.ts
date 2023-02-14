import { Router } from 'express';
import index from '../controllers';
 
const { UsersController } = index;

const usersRouter = Router();

usersRouter.post('/', UsersController.create);

export default usersRouter;