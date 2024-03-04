export const runAssertions = async (Book, books = []) => {
  const newBook = (await Book.findOne({
    year:  1967
  }).exec()) || {};

  console.assert(newBook.author === 'Gabriel García Márquez',
    'New book should have proper author', newBook);
  console.assert(newBook.title === 'One Hundred Years of Solitude',
    'New book should have proper title', newBook);

  console.assert(books.length === 7, 'Should find 7 books', books.length);
  const decameron = books.find(book => book.title === 'The Decameron') || {};
  console.assert(decameron.bookDetails === 'Giovanni Boccaccio - The Decameron', decameron.bookDetails);
  console.assert(decameron.totalStoreValue === 2011.68, 'Should have total store value of',
    decameron.totalStoreValue);
};
