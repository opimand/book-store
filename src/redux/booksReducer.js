import {
  ADD_BOOK_TO_SHELF,
  ADD_REVIEW_BOOK,
  ADD_SHELF,
  ADD_SHELF_REVIEW,
  FETCH_BOOKS,
  LIKE_BOOK,
  RATE_BOOK,
} from './types';
import { addBookOnShelf, addReview, likeBook, rateBook } from '../helpers';

const initialState = {
  fetchedBooks: [],
  shelves: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, fetchedBooks: action.payload };
    case ADD_REVIEW_BOOK:
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

    case ADD_BOOK_TO_SHELF:
      return {
        ...state,
        shelves: addBookOnShelf(state.shelves, action.payload),
      };
    case ADD_SHELF_REVIEW:
      return {
        ...state,
        shelves: addReview(state.shelves, action.payload),
      };
    default:
      return state;
  }
};
