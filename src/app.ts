import express from 'express';
import index from './routes';

const { productsRouter, usersRouter } = index;

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

export default app;
