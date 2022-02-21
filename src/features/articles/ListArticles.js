import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  const articles = useSelector((state) => state.articles);

  const renderedArticles = articles.map((article) => (
    <article className="articles-excerpt" key={article.id}>
      <h3>{article.name}</h3>
      <p className="articles-content">{article.amountInStock}</p>
      <Link style={{ display: "block", margin: "1rem 0" }} to={`/articles/${article.id}`} className="button muted-button">
        View article
      </Link>
    </article>
  ));

  return (
    <section>
      <h1>Articles...</h1>
      <div>{renderedArticles}</div>
      <Outlet />
    </section>
  );
};

export default Articles;
