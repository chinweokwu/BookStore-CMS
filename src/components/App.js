import React from 'react';
import BookForm from '../containers/bookform';
import BookList from '../containers/booklist';

const App = () => (
  <div className="App">
    <div className="app">
      <BookList />
      <BookForm />
    </div>
  </div>
);

export default App;
