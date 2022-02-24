import articlesHandlers from './articles-handlers';
import productsHandlers from './products-handlers';

const handlers = [...articlesHandlers, ...productsHandlers];

export default handlers;
