import { useSelector } from 'react-redux';

const Articles = () => {
  const articles = useSelector((state) => state.articles);

  const renderedArticles = articles.map((articles) => (
    <article className="articles-excerpt" key={articles.id}>
      <h3>{articles.name}</h3>
      <p className="articles-content">{articles.amountInStock}</p>
    </article>
  ));

  return (
    <section>
      <h1>Articles...</h1>
      <div>{renderedArticles}</div>
    </section>
  );
};

export default Articles;
