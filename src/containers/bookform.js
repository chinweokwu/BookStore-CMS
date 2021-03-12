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

  const handleSubmit = e => {
    e.preventDefault();
    createBook(book);
    setBook({
      title: '',
      category: 'Horror',
    });
  };

  return (
    <div className="bookform">
      <p className="Line" />
      <h2>ADD NEW FORM</h2>
      <form>
        <input type="text" className="input-form" placeholder="Book Title" name="title" value={book.title} onChange={handleChange} />
        <select type="text" className="select-form" onChange={handleChange} value={book.category} name="category" required>
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
        <button type="button" value="submit" onClick={handleSubmit} className="submit-button">
          submit
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
