import React from 'react';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <input type="text" placeholder="pls write your book title" />
      <select>
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
      <button type="button" value="submit">
        submit
      </button>
    </form>
  );
};

export default BookForm;
