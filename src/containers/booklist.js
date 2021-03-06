import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ dataBook }) => {
  <div>
    <h1>Book List</h1>
    <table>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>ID</th>
      </tr>
      {dataBook.map(book => <Book key={book.id} book={book} />)}
    </table>
  </div>;
};

const mapStateToProps = state => ({
  dataBook: state.books,
});

export default connect(mapStateToProps)(BookList);
