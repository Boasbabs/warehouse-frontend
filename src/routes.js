import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { Articles } from 'features';
import { NotFound } from './base-components';
import SingleArticle from 'features/articles/SingleArticle';
import EditArticle from 'features/articles/EditArticle';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="articles" element={<Articles />}/>
          <Route path="/articles/:articleId" element={<SingleArticle />} />
          <Route path="/editArticle/:articleId" element={<EditArticle />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
