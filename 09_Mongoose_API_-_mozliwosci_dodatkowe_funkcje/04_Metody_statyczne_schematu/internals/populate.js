import { connectToMongoose } from './connect';

export const collectionName = 'books';

const data = [
  {
    author: 'Giacomo Leopardi',
    country: 'Italy',
    imageLink: 'images/poems-giacomo-leopardi.jpg',
    language: 'Italian',
    link: '\n',
    pages: 184,
    title: 'Poems',
    year: 1818
  },
  {
    author: 'Doris Lessing',
    country: 'United Kingdom',
    imageLink: 'images/the-golden-notebook.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/The_Golden_Notebook\n',
    pages: 688,
    title: 'The Golden Notebook',
    year: 1962
  },
  {
    author: 'Astrid Lindgren',
    country: 'Sweden',
    imageLink: 'images/pippi-longstocking.jpg',
    language: 'Swedish',
    link: 'https://en.wikipedia.org/wiki/Pippi_Longstocking\n',
    pages: 160,
    title: 'Pippi Longstocking',
    year: 1945
  },
  {
    author: 'Lu Xun',
    country: 'China',
    imageLink: 'images/diary-of-a-madman.jpg',
    language: 'Chinese',
    link: 'https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n',
    pages: 389,
    title: 'Diary of a Madman',
    year: 1918
  },
  {
    author: 'Naguib Mahfouz',
    country: 'Egypt',
    imageLink: 'images/children-of-gebelawi.jpg',
    language: 'Arabic',
    link: 'https://en.wikipedia.org/wiki/Children_of_Gebelawi\n',
    pages: 355,
    title: 'Children of Gebelawi',
    year: 1959
  },
  {
    author: 'Thomas Mann',
    country: 'Germany',
    language: 'German',
    link: 'https://en.wikipedia.org/wiki/Buddenbrooks\n',
    pages: 736,
    title: 'Buddenbrooks',
    year: 1901
  },
  {
    author: 'Thomas Mann',
    country: 'Germany',
    language: 'German',
    link: 'https://en.wikipedia.org/wiki/The_Magic_Mountain\n',
    pages: 720,
    title: 'The Magic Mountain',
    year: 1924
  },
  {
    author: 'Herman Melville',
    country: 'United States',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Moby-Dick\n',
    pages: 378,
    title: 'Moby Dick',
    year: 1851
  },
  {
    author: 'Michel de Montaigne',
    country: 'France',
    language: 'French',
    link: 'https://en.wikipedia.org/wiki/Essays_(Montaigne)\n',
    pages: 404,
    title: 'Essays',
    year: 1595
  },
  {
    author: 'Elsa Morante',
    country: 'Italy',
    language: 'Italian',
    link: 'https://en.wikipedia.org/wiki/History_(novel)\n',
    pages: 600,
    title: 'History',
    year: 1974
  },
  {
    author: 'Toni Morrison',
    country: 'United States',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Beloved_(novel)\n',
    pages: 321,
    title: 'Beloved',
    year: 1987
  },
  {
    author: 'Murasaki Shikibu',
    country: 'Japan',
    language: 'Japanese',
    link: 'https://en.wikipedia.org/wiki/The_Tale_of_Genji\n',
    pages: 1360,
    title: 'The Tale of Genji',
    year: 1006
  },
  {
    author: 'Robert Musil',
    country: 'Austria',
    language: 'German',
    link: 'https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n',
    pages: 365,
    title: 'The Man Without Qualities',
    year: 1931
  }, {
    author: 'Leo Tolstoy',
    country: 'Russia',
    imageLink: 'images/the-death-of-ivan-ilyich.jpg',
    language: 'Russian',
    link: 'https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n',
    pages: 92,
    title: 'The Death of Ivan Ilyich',
    year: 1884
  },
  {
    author: 'Mark Twain',
    country: 'United States',
    imageLink: 'images/the-adventures-of-huckleberry-finn.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n',
    pages: 224,
    title: 'The Adventures of Huckleberry Finn',
    year: 1884
  }
];

(async function () {
  const db = await connectToMongoose(collectionName, true);
  await db.collection(collectionName).insertMany(data);

  return process.exit(0);
})();
