export const addReview = (booksArr, newBook) =>
  booksArr.map((book) => {
    if (book.id === newBook.id) {
      return {
        ...book,
        reviews: book.reviews ? book.reviews.concat(newBook.review) : [newBook.review],
      };
    }

    return book;
  });

export const likeBook = (booksArray, newBook) =>
  booksArray.map((item) => {
    if (item.id === newBook.id) {
      return {
        ...item,
        liked: newBook.liked,
      };
    }

    return item;
  });

export const rateBook = (booksArray, newBook) =>
  booksArray.map((item) => {
    if (item.id === newBook.id) {
      return {
        ...item,
        rating: newBook.rating,
      };
    }

    return item;
  });

export function getCategories(books) {
  const categories = [].concat.apply([], books);
  const category = [...new Set(categories)];

  return category.filter(Boolean);
}

export function getId() {
  return 'id' + new Date().getTime();
}

export const addBookOnShelf = (shelves, { shelfToAdd, bookToAdd }) => {
  return shelves.map((shelf) => {
    if (shelf.id === shelfToAdd) {
      return {
        ...shelf,
        books: shelf.books.concat(bookToAdd),
      };
    }
    return shelf;
  });
};
