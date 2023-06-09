import express from 'express';
import index from './routes';

const { productsRouter, usersRouter, ordersRouter } = index;

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

export default app;
