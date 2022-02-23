import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { Articles } from 'features';
import { NotFound } from './base-components';
import SingleArticle from 'features/articles/SingleArticle';
import EditArticle from 'features/articles/EditArticle';
import AddArticle from 'features/articles/AddArticle';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="articles" element={<Articles />}/>
          <Route path="/articles/:articleId" element={<SingleArticle />} />
          <Route path="/article/edit/:articleId" element={<EditArticle />} />
          <Route path="/article/add" element={<AddArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
