import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actionType';

export const createBook = data => ({
  type: CREATE_BOOK,
  payload: data,
});

export const removeBook = data => ({
  type: REMOVE_BOOK,
  payload: data,
});

export const changeFilters = data => ({
  type: CHANGE_FILTER,
  payload: data,
});
