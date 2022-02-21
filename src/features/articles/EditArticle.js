import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { updateArticle } from './redux/articlesSlice';

const EditArticle = () => {
  const { articleId } = useParams();

  const article = useSelector(({ articles }) =>
    articles.articles.find((article) => article.id === articleId)
  );
  const [name, setName] = useState(article.name);
  const [amountInStock, setAmountInStock] = useState(article.amountInStock);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleAmountChange = (e) => setAmountInStock(e.target.value);

  const handleSubmit = () => {
    if (name && amountInStock) {
      dispatch(updateArticle({ id: article.id, name, amountInStock }));
      navigate(`/articles`);
    }
  };

  return (
    <section>
      <h2>Edit Article</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          type="number"
          id="amountInStock"
          name="amountInStock"
          value={amountInStock}
          onChange={handleAmountChange}
        />
      </form>
      <button type="button" onClick={handleSubmit}>
        Save Post
      </button>
    </section>
  );
};

export default EditArticle;
