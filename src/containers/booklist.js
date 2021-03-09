import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilters } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  dataBook, removeBook, filterBook, filter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = ({ target }) => {
    filterBook(target.value);
  };
  const bookFilter = filters => {
    if (filters === 'All') {
      return dataBook;
    }
    return dataBook.filter(({ category }) => category === filters);
  };
  const books = bookFilter(filter);
  return (
    <div>
      <h1>Book List</h1>
      <div>
        <CategoryFilter bookfilters={handleFilterChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
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
  filter: state.filters,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => { dispatch(removeBook(book)); },
  filterBook: filter => { dispatch(changeFilters(filter)); },
});

BookList.propTypes = {
  dataBook: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
