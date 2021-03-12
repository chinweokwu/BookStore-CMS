import { combineReducers } from 'redux';
import bookReducer from './books';
import bookFiltersReducers from './filters';

const rootReducers = combineReducers({
  books: bookReducer,
  filters: bookFiltersReducers,
});

export default rootReducers;
