import { rest } from 'msw';
import { GET_PRODUCTS_DATA } from '../data';

const productsHandlers = [
  rest.get('http://localhost:7000/products/', (req, res, ctx) => {
    return res(ctx.json(GET_PRODUCTS_DATA));
  }),
  
];

export default productsHandlers;
