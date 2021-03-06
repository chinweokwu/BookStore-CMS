import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionType';

const Book1 = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Mission Impossible',
  category: 'Action',
};

const Book2 = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Jungle Book',
  category: 'Kids',
};

const Book3 = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'SAW',
  category: 'Horror',
};

const initialState = [Book1, Book2, Book3];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
