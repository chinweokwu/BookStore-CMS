import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = ({ dataBook, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {dataBook.map(book => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  dataBook: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => { dispatch(removeBook(book)); },
});

BookList.propTypes = {
  dataBook: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
