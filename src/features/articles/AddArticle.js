import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from './redux/articlesSlice';

const AddArticle = () => {
  const [name, setName] = useState('');
  const [amountInStock, setAmountInStock] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => setName(e.target.value);
  const handleAmountChange = (e) => setAmountInStock(e.target.value);

  const handleSubmit = () => {
    if (name && amountInStock) {
      dispatch(
        addArticle({
          id: Math.random(),
          name,
          amountInStock
        })
      );

      setName('');
      setAmountInStock('');
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
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
        <input
          type="number"
          id="amountInStock"
          name="amountInStock"
          value={amountInStock}
          onChange={handleAmountChange}
        />
        <button type="button" onClick={handleSubmit}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddArticle;
