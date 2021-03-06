/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Book = ({ book }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>{book.title}</td>
            <td>{book.category}</td>
            <td>{book.id}</td>
          </tr>
          ;
        </thead>
      </table>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
