/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>{book.id}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
