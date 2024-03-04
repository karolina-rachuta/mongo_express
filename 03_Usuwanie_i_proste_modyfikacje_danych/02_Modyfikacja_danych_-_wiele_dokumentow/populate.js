import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'movies';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url,  { useUnifiedTopology: true });
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    // Try to drop old collection, if existing
    try {
      await db.dropCollection(collectionName);
      console.log(`Dropped old ${collectionName} collection`);
    } catch (err) {
      console.log('Collection does not exist yet, proceeding further');
    }

    // Add all the entries
    await db.createCollection(collectionName);
    console.log(`Created new ${collectionName} collection`);

    await db.collection(collectionName).insertMany([
      {
        _id: 1,
        originalLanguage: 'en',
        originalTitle: 'Mad Max',
        title: 'Mad Max',
        vote: 6.7,
        seen: false,
        series: 'Mad Max',
        releaseDate: '1979-04-12'
      }, {
        _id: 2,
        originalLanguage: 'en',
        originalTitle: 'Mad Max: Fury Road',
        title: 'Mad Max: Fury Road',
        vote: 7.5,
        seen: false,
        series: 'Mad Max',
        releaseDate: '2015-05-13'
      }, {
        _id: 3,
        originalLanguage: 'en',
        originalTitle: 'Mad Max 2',
        title: 'Mad Max 2',
        vote: 7.4,
        seen: false,
        series: 'Mad Max',
        releaseDate: '1981-12-24'
      }, {
        _id: 4,
        vote: 6.1,
        title: 'Mad Max Beyond Thunderdome',
        releaseDate: '1985-06-29',
        originalLanguage: 'en',
        seen: false,
        series: 'Mad Max',
        originalTitle: 'Mad Max Beyond Thunderdome'
      }, {
        _id: 5,
        originalLanguage: 'en',
        originalTitle: 'Mission: Impossible - Ghost Protocol',
        title: 'Mission: Impossible - Ghost Protocol',
        vote: 7,
        seen: false,
        series: 'Mission: Impossible',
        releaseDate: '2011-12-07'
      }, {
        _id: 6,
        originalLanguage: 'en',
        originalTitle: 'Mission: Impossible - Rogue Nation',
        title: 'Mission: Impossible - Rogue Nation',
        vote: 7.1,
        seen: false,
        series: 'Mission: Impossible',
        releaseDate: '2015-07-23'
      }, {
        _id: 7,
        originalLanguage: 'en',
        originalTitle: 'The Lord of the Rings: The Two Towers',
        title: 'The Lord of the Rings: The Two Towers',
        vote: 8.3,
        seen: false,
        series: 'The Lord of the Rings',
        releaseDate: '2002-12-18'
      }, {
        _id: 8,
        originalLanguage: 'en',
        originalTitle: 'Airplane!',
        title: 'Airplane!',
        vote: 7.3,
        seen: true,
        series: 'Airplane!',
        releaseDate: '1980-07-02'
      }, {
        _id: 9,
        originalLanguage: 'en',
        originalTitle: 'The Shawshank Redemption',
        title: 'The Shawshank Redemption',
        vote: 8.7,
        seen: true,
        series: '',
        releaseDate: '1994-09-23'
      }
    ]);
    console.log(`Inserted ${collectionName} data into the collection`);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

