import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleArticle = () => {
  const { articleId } = useParams();

  const article = useSelector((state) =>
    state.articles.find((article) => article.id === articleId)
  );

  if (!article) {
    return (
      <section>
        <h2>Article not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="article">
        <h1>SINGLE ARTICLE</h1>
        <h2>{article.name}</h2>
        <p className="article-content">{article.amountInStock}</p>
      </article>
    </section>
  );
};

export default SingleArticle;
