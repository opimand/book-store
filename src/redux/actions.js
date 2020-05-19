import {
  ADD_BOOK_TO_SHELF,
  ADD_REVIEW_BOOK,
  ADD_SHELF,
  ADD_SHELF_REVIEW,
  DARK_MODE,
  FETCH_BOOKS,
  HIDE_LOADER,
  LIKE_BOOK,
  RATE_BOOK,
  SHOW_LOADER,
} from './types';

export function fetchBooks() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch('https://google-books.p.rapidapi.com/volumes', {
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'google-books.p.rapidapi.com',
        'x-rapidapi-key': 'c6ccbe2e2dmsh79bc6b5750cbea0p12bd01jsnca0a2c5fdee6',
      },
    });
    const json = await response.json();
    json.items.forEach((item) => ((item.liked = false), (item.rating = 0), (item.reviews = [])));
    dispatch({ type: FETCH_BOOKS, payload: json.items });
    dispatch(hideLoader());
  };
}

export function addBookReview(data) {
  return {
    type: ADD_REVIEW_BOOK,
    payload: data,
  };
}

export function likeBook(data) {
  return {
    type: LIKE_BOOK,
    payload: data,
  };
}

export function rateBook(data) {
  return {
    type: RATE_BOOK,
    payload: data,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function darkModeToggle() {
  return {
    type: DARK_MODE,
  };
}

export function addShelf(data) {
  return {
    type: ADD_SHELF,
    payload: data,
  };
}

export function addBookToShelf(data) {
  return {
    type: ADD_BOOK_TO_SHELF,
    payload: data,
  };
}

export function addShelfReview(data) {
  return {
    type: ADD_SHELF_REVIEW,
    payload: data,
  };
}
