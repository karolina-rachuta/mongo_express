import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'haystack';

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

    const haystack = [{
      length: 8.11,
      material: 'plastic',
      weight: 0.29
    }, {
      length: 5.0,
      material: 'metal',
      weight: 2.7
    }, {
      length: 3.5,
      material: 'wood',
      weight: 0.16
    }, {
      length: 2.04,
      material: 'plastic',
      weight: 2.38
    }, {
      length: 0.99,
      material: 'metal',
      weight: 2.29
    }, {
      length: 5.0,
      material: 'plastic',
      weight: 0.88
    }, {
      length: 5.0,
      material: 'plastic',
      weight: 1.42
    }, {
      length: 5.0,
      material: 'metal',
      weight: 1.0
    }, {
      length: 2.39,
      material: 'plastic',
      weight: 4.4
    }, {
      length: 5.0,
      material: 'wood',
      weight: 2.58
    }, {
      length: 5.52,
      material: 'plastic',
      weight: 4.09
    }, {
      length: 5.0,
      material: 'wood',
      weight: 2.19
    }, {
      length: 5.48,
      material: 'wood',
      weight: 3.77
    }, {
      length: 9.19,
      material: 'wood',
      weight: 1.0
    }, {
      length: 7.8,
      material: 'wood',
      weight: 2.92
    }, {
      length: 14.64,
      material: 'metal',
      weight: 1.81
    }, {
      length: 5.27,
      material: 'hay',
      weight: 1.0
    }, {
      length: 13.7,
      material: 'wood',
      weight: 0.24
    }, {
      length: 5.0,
      material: 'plastic',
      weight: 4.41
    }, {
      length: 10.8,
      material: 'wood',
      weight: 1.0
    }, {
      length: 10.03,
      material: 'plastic',
      weight: 4.06
    }];

    const collection = db.collection(collectionName);
    await collection.insertMany(haystack);

    console.log(`Inserted ${collectionName} data into the collection`);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

