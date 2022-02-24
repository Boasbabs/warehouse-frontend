import { rest } from 'msw';
import { GET_ARTICLES_DATA, GET_ARTICLE_DATA } from '../data';

const articlesHandlers = [
  rest.get('http://localhost:7000/articles/', (req, res, ctx) => {
    return res(ctx.json(GET_ARTICLES_DATA));
  }),
  rest.get(
    'http://localhost:7000/articles/addc65a8-c759-41d8-a18a-89fe446ad484',
    (req, res, ctx) => {
      return res(ctx.json(GET_ARTICLE_DATA));
    }
  )
];

export default articlesHandlers;
