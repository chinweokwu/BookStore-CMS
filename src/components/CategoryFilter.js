import React from 'react';
import PropTypes from 'prop-types';

const categoryFilter = ({ bookfilters }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select type="text" name="category" onChange={bookfilters}>
      {
        categories.map(category => (
          <option key={category} value={category}>
            {' '}
            {category}
            {' '}
          </option>
        ))
      }
    </select>
  );
};

categoryFilter.propTypes = {
  bookfilters: PropTypes.func.isRequired,
};

export default categoryFilter;
