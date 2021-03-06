import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ dataBook }) => (
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
      {dataBook.map(book => <Book key={book.id} book={book} />)}
    </table>
  </div>
);

const mapStateToProps = state => ({
  dataBook: state.books,
});

BookList.propTypes = {
  dataBook: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BookList);
