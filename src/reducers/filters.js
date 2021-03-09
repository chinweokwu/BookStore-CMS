import { CHANGE_FILTER } from '../actions/actionType';

const bookFiltersReducers = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return (
        action.payload === 'ALL' ? '' : action.payload
      );
    default: return state;
  }
};

export default bookFiltersReducers;
