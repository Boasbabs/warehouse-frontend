import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { Articles } from 'features';
import { NotFound } from './base-components';
import SingleArticle from 'features/articles/SingleArticle';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="articles" element={<Articles />}>
            <Route path=":articleId" element={<SingleArticle />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
