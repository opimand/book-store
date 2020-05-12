import { ADD_REVIEW, ADD_SHELF, FETCH_BOOKS, LIKE_BOOK, RATE_BOOK } from './types';
import { addReview, likeBook, rateBook } from '../helpers';

const initialState = {
  fetchedBooks: [],
  shelves: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, fetchedBooks: action.payload };
    case ADD_REVIEW:
      return {
        ...state,
        fetchedBooks: addReview(state.fetchedBooks, action.payload),
      };
    case LIKE_BOOK:
      return {
        ...state,
        fetchedBooks: likeBook(state.fetchedBooks, action.payload),
      };
    case RATE_BOOK:
      return {
        ...state,
        fetchedBooks: rateBook(state.fetchedBooks, action.payload),
      };
    case ADD_SHELF:
      return {
        ...state,
        shelves: [...state.shelves, action.payload],
      };
    default:
      return state;
  }
};
