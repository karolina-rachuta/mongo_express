import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'secret';

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

    const collection = db.collection(collectionName);
    await collection.insertMany([{
      createdAt: new Date('2019-04-12T04:07:32Z'),
      letter: 'T',
      isSecret: true
    }, {
      createdAt: new Date('2019-11-15T20:21:55Z'),
      letter: 'F'
    }, {
      createdAt: new Date('2019-04-27T00:16:00Z'),
      letter: 'P',
      isSecret: true
    }, {
      createdAt: new Date('2019-12-24T21:51:25Z'),
      letter: 'I'
    }, {
      createdAt: new Date('2019-03-04T16:16:22Z'),
      letter: 'R',
      isSecret: true
    }, {
      createdAt: new Date('2019-10-13T14:56:00Z'),
      letter: 'L'
    }, {
      createdAt: new Date('2019-03-03T16:34:33Z'),
      letter: 'C',
      isSecret: true
    }, {
      createdAt: new Date('2019-08-11T02:30:32Z'),
      letter: 'R',
      isSecret: true
    }, {
      createdAt: new Date('2019-10-09T00:01:37Z'),
      letter: 'S',
      isSecret: true
    }, {
      createdAt: new Date('2019-11-11T09:52:31Z'),
      letter: 'W'
    }, {
      createdAt: new Date('2019-10-15T22:11:52Z'),
      letter: 'E',
      isSecret: true
    }, {
      createdAt: new Date('2019-12-14T12:54:18Z'),
      letter: 'O'
    }, {
      createdAt: new Date('2019-03-03T14:50:19Z'),
      letter: 'E',
      isSecret: true
    }, {
      createdAt: new Date('2019-12-23T08:29:05Z')
    }, {
      createdAt: new Date('2019-07-03T13:44:01Z'),
      letter: 'U'
    }, {
      createdAt: new Date('2019-03-16T01:53:35Z'),
      letter: 'E',
      isSecret: true
    }, {
      createdAt: new Date('2019-11-25T06:46:55Z'),
      letter: 'D'
    }, {
      createdAt: new Date('2019-07-17T10:14:07Z'),
      letter: 'H',
      isSecret: true
    }, {
      createdAt: new Date('2019-02-03T09:00:24Z'),
      letter: 'S',
      isSecret: true
    }, {
      createdAt: new Date('2019-08-14T22:26:58Z'),
      letter: 'A',
      isSecret: true
    }]);

    console.log(`Inserted ${collectionName} into the collection`);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

