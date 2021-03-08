import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BookForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [book, setBook] = useState({
    title: '',
    category: 'Horror',
  });

  const handleChange = ({ target }) => {
    setBook(state => ({
      ...state,
      [target.name]: target.value,
      id: Math.floor(Math.random() * 100) + 1,
    }));
  };
  // console.log(handleChange());

  const handleSubmit = e => {
    e.preventDefault();
    createBook(book);
    setBook({
      title: '',
      category: 'Horror',
    });
  };

  return (
    <form>
      <input type="text" placeholder="pls write your book title" name="title" value={book.title} onChange={handleChange} />
      <select type="text" onChange={handleChange} value={book.category} name="category" required>
        {
          categories.map(cat => (
            <option key={categories.indexOf(cat)} value={cat}>
              {' '}
              {cat}
              {' '}
            </option>
          ))
        }
      </select>
      <button type="button" value="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
