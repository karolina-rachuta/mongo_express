import MongoClient from 'mongodb';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'cars';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    // HERE - modify this "find" code!
    const cars = collection.find({});

    // Assertions below - do not modify them!
    const carsArr = await cars.toArray();
    console.assert(carsArr && carsArr.length === 4, 'Should have 4 unmigrated entries', cars);
    console.assert(carsArr && carsArr[3] && carsArr[3].model === 'A6', 'Should have A6 as the last found model',
      cars[3])

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

