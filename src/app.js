import express from 'express';
import morgan from 'morgan';
import {config} from 'dotenv';
config()
import productsRoutes from './routes/products.routes.js';
const app = express();

//settings
app.set('view engine', 'ejs');
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/api/products', productsRoutes);


export default app;
