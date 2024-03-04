import MongoClient from 'mongodb';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'discounted';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url, {useUnifiedTopology: true});
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    // HERE - modify this code!
    let discounted;

    // Assertions below
    console.assert(discounted && discounted.length === 7,
      'Should have 7 potentially discounted products',
      discounted);
    console.assert(discounted && discounted[6] && discounted[6].name === 'Ice Cream Bar - Oreo Cone', 'Should have Ice Cream Bar - Oreo Cone as first product',
      discounted);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

