import { rest } from 'msw';
import { GET_SALES_DATA } from '../data';

const salesHandlers = [
  rest.get('http://localhost:7000/sales/', (req, res, ctx) => {
    return res(ctx.json(GET_SALES_DATA));
  }),
  
];

export default salesHandlers;
