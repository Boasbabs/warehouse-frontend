import articlesHandlers from './articles-handlers';
import productsHandlers from './products-handlers';
import salesHandlers from './sales-handlers';

const handlers = [...articlesHandlers, ...productsHandlers, ...salesHandlers];

export default handlers;
