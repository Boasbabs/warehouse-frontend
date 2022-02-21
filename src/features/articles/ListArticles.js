import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { getArticles } from './redux/articlesThunk';

const Articles = () => {
  const dispatch = useDispatch();
  const { articles, status } = useSelector((state) => state.articles);

  const renderedArticles = articles.map((article) => (
    <article className="articles-excerpt" key={article.id}>
      <h3>{article.name}</h3>
      <p className="articles-content">{article.amountInStock}</p>
      <Link
        style={{ display: 'block', margin: '1rem 0' }}
        to={`/articles/${article.id}`}
      >
        View
      </Link>
      <Link
        style={{ display: 'block', margin: '1rem 0' }}
        to={`/editArticle/${article.id}`}
      >
        Edit
      </Link>
    </article>
  ));

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <section>
      <h1>Articles...{status}</h1>
      <div>{renderedArticles}</div>
      <hr />
      <Outlet />
    </section>
  );
};

export default Articles;
