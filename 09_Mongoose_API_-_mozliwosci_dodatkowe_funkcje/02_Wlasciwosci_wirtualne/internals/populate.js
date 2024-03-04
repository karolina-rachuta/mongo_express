import { connectToMongoose } from './connect';

export const collectionName = 'books';

const data = [
  {
    author: 'Samuel Beckett',
    country: 'Republic of Ireland',
    language: 'French, English',
    pages: 256,
    title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
    year: 1952,
    price: 57.07,
    amount: 50
  },
  {
    author: 'Giovanni Boccaccio',
    country: 'Italy',
    language: 'Italian',
    pages: 1024,
    title: 'The Decameron',
    year: 1351,
    price: 27.94,
    amount: 72
  },
  {
    author: 'Jorge Luis Borges',
    country: 'Argentina',
    language: 'Spanish',
    pages: 224,
    title: 'Ficciones',
    year: 1965,
    price: 26.49,
    amount: 44
  },
  {
    author: 'Emily Brontë',
    country: 'United Kingdom',
    language: 'English',
    pages: 342,
    title: 'Wuthering Heights',
    year: 1847,
    price: 10.58,
    amount: 82
  },
  {
    author: 'Albert Camus',
    country: 'Algeria, French Empire',
    language: 'French',
    pages: 185,
    title: 'The Stranger',
    year: 1942,
    price: 72.87,
    amount: 90
  },
  {
    author: 'Paul Celan',
    country: 'Romania, France',
    language: 'German',
    pages: 320,
    title: 'Poems',
    year: 1952,
    price: 63.43,
    amount: 33
  },
  {
    author: 'Miguel de Cervantes',
    country: 'Spain',
    language: 'Spanish',
    pages: 1056,
    title: 'Don Quijote De La Mancha',
    year: 1610,
    price: 67.21,
    amount: 50
  },
  {
    author: 'Anton Chekhov',
    country: 'Russia',
    language: 'Russian',
    pages: 194,
    title: 'Stories',
    year: 1886,
    price: 17.35,
    amount: 18
  },
  {
    author: 'Joseph Conrad',
    country: 'United Kingdom',
    language: 'English',
    pages: 320,
    title: 'Nostromo',
    year: 1904,
    price: 54.12,
    amount: 87
  },
  {
    author: 'Charles Dickens',
    country: 'United Kingdom',
    language: 'English',
    pages: 194,
    title: 'Great Expectations',
    year: 1861,
    price: 14.65,
    amount: 15
  }
];

(async function () {
  const db = await connectToMongoose(collectionName, true);
  await db.collection(collectionName).insertMany(data);

  return process.exit(0);
})();
