export const runAssertions = async (model) => {
  console.assert(model, 'Should have a defined model', model);

  // getBooksByPages
  console.assert(model.getBooksByPages,
    'Should have getBooksByPage defined', model.getBooksByPages);

  let books = (await model.getBooksByPages(null, 300)) || [];
  console.assert(books.length === 4, 'Should find 4 books by pages (max 300)',
    books.length);

  books = (await model.getBooksByPages(550)) || [];
  console.assert(books.length === 5, 'Should find 5 books by pages (min 550)',
    books.length);

  // getRandomBookByYear
  console.assert(model.getRandomBookByYear,
    'Should have getRandomBookByYear defined', model.getRandomBookByYear);

  let book = (await model.getRandomBookByYear(1884)) || {};
  console.assert(book.title === 'The Adventures of Huckleberry Finn' || book.title === 'The Death of Ivan Ilyich',
    'Should find one of two books in the year 1884', book);

  // getBooksByLanguage
  console.assert(model.getBooksByLanguage,
    'Should have getBooksByLanguage defined', model.getBooksByLanguage);

  books = await model.getBooksByLanguage('Italian');
  console.assert(books.length === 2, 'Should find 2 books by language (Italian)',
    books.length);
};
