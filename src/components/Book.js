/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="book-component">
    <div className="lesson-panel">
      <p className="category">{book.category}</p>
      <p className="category-title">{book.title}</p>
      <p className="category-id">{book.id}</p>
      <button type="submit">Comment</button>
      <button type="submit" onClick={() => handleRemoveBook(book.id)}>Remove</button>
      <button type="submit">Edit</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
