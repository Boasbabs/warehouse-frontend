import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NotFound } from './base-components';
import App from './App';
import {
  ListArticles,
  SingleArticle,
  EditArticle,
  AddArticle,
  ListProducts,
  SingleProduct,
  EditProduct,
  AddProduct,
  ListSales,
  AddSale,
  SingleSale
} from 'features';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="articles" index element={<ListArticles />} />
          <Route path="articles/:articleId" element={<SingleArticle />} />
          <Route path="article/edit/:articleId" element={<EditArticle />} />
          <Route path="article/add" element={<AddArticle />} />

          <Route path="products" element={<ListProducts />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="product/edit/:productId" element={<EditProduct />} />
          <Route path="product/add" element={<AddProduct />} />

          <Route path="sales" element={<ListSales />} />
          <Route path="sale/add" element={<AddSale />} />
          <Route path="sales/:saleId" element={<SingleSale />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
