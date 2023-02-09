import express from 'express';
import index from './routes';

const { productsRouter } = index;

const app = express();

app.use(express.json());

app.use(productsRouter);

export default app;
