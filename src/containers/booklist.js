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
    <div className="booklist">
      <header className="panel-bg Line">
        <div className="bookleft">
          <h1 className="booklist-logo">Bookstore CMS</h1>
          <p className="bookstore-cms book-nav">BOOKS</p>
          <p className="bookstore-cms categories">
            CATEGORIES
            <span>
              {' '}
              <CategoryFilter bookfilters={handleFilterChange} />
            </span>
          </p>
        </div>
        <div className="booklist-user">
          <i className="far fa-user-circle" />
        </div>
      </header>
      <main className="booklist-book">
        {books.map(book => (
          <Book
            key={book.id}
            book={book}
            handleRemoveBook={handleRemoveBook}
          />
        ))}
      </main>
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
