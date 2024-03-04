import MongoClient from 'mongodb';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'music';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url,  { useUnifiedTopology: true });
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    // Get collection
    const collection = db.collection(collectionName);

    // HERE - insert iteration using "forEach" method
    let toListenTimeForEach = 0;

    // Assertions below - do not change them
    console.assert(toListenTimeForEach === 4897, 'Should sum up to 4897 seconds', toListenTimeForEach);

    // HERE - insert iteration using "next()" method
    let toListenTimeNext = 0;

    // Assertions below - do not change them
    console.assert(toListenTimeForEach === toListenTimeNext, 'Should be equal between two methods', toListenTimeNext);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

