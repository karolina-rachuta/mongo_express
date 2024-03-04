import module from 'module';
import MongoClient from 'mongodb';

import { connectToMongoose, dropCollection } from './connect';

export const commentsCollectionName = 'comments';
export const collectionName = 'movies';

const { ObjectID } = MongoClient;

const comments = [
  {
    _id: new ObjectID('123123123123123123123123'),
    text: 'Love it!',
    author: 'Lena78',
    likes: 12
  }, {
    _id: new ObjectID('456456456456456456456456'),
    text: 'The worst movie ever! :(',
    likes: 8
  }, {
    _id: new ObjectID('789789789789789789789789'),
    text: 'Liked the beginning, hated the ending',
    likes: 32
  }, {
    _id: new ObjectID('321321321321321321321321'),
    text: 'The main character was very expressive, the plot was a flop though',
    likes: 67
  }
];

const data = [
  {
    movieID: 70118953,
    intRating: 50,
    title: 'Unsere Ozeane',
    timestamp: 1414704783308,
    rating: 5.0,
    platform: 'HBO Go',
    date: new Date('2014-10-30')
  },
  {
    movieID: 1084379,
    intRating: 50,
    title: 'The Usual Suspects',
    timestamp: 1414791818544,
    rating: 5.0,
    platform: 'Netflix',
    date: new Date('2014-10-31')
  },
  {
    movieID: 70095140,
    intRating: 50,
    title: 'Slumdog Million\u00e4r',
    timestamp: 1413490212239,
    rating: 5.0,
    platform: 'Prime',
    date: new Date('2014-10-16')
  },
  {
    movieID: 880640,
    intRating: 50,
    title: 'Pulp Fiction',
    timestamp: 1414791800941,
    rating: 5.0,
    platform: 'Netflix',
    date: new Date('2014-10-31')
  },
  {
    movieID: 70071605,
    intRating: 50,
    title: 'Persepolis',
    timestamp: 1414790284150,
    rating: 5.0,
    platform: 'HBO Go',
    date: new Date('2014-10-31')
  },
  {
    movieID: 70228041,
    intRating: 50,
    title: 'Moonrise Kingdom',
    timestamp: 1414704974723,
    rating: 5.0,
    platform: 'HBO Go',
    date: new Date('2014-10-30')
  },
  {
    movieID: 70021636,
    intRating: 50,
    title: 'Madagascar',
    timestamp: 1413490259281,
    rating: 5.0,
    platform: 'Netflix',
    date: new Date('2014-10-16')
  },
  {
    movieID: 70043947,
    intRating: 50,
    title: 'Little Miss Sunshine',
    timestamp: 1413490295157,
    rating: 5.0,
    platform: 'HBO Go',
    date: new Date('2014-10-16'),
    comments: ['123123123123123123123123']
  },
  {
    movieID: 70131314,
    intRating: 50,
    title: 'Inception',
    timestamp: 1414789077575,
    rating: 5.0,
    platform: 'Prime',
    date: new Date('2014-10-31'),
    comments: ['456456456456456456456456']
  },
  {
    movieID: 26004747,
    intRating: 50,
    title: 'Fight Club',
    timestamp: 1415564377255,
    rating: 5.0,
    platform: 'HBO Go',
    date: new Date('2014-11-09'),
    comments: ['789789789789789789789789', '321321321321321321321321']
  }
];

export default async function populate(shouldExit) {
  const db = await connectToMongoose();

  await dropCollection(db, commentsCollectionName);
  await dropCollection(db, collectionName);

  await db.collection(commentsCollectionName).insertMany(comments);
  await db.collection(collectionName).insertMany(data);

  if (shouldExit) {
    return process.exit(0);
  }
}
