import { combineReducers } from 'redux';
import bookReducer from './books';

const rootReducers = combineReducers({
  books: bookReducer,
});

export default rootReducers;
