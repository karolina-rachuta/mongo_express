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

    // Get collection
    const collection = db.collection(collectionName);

    let needle;
    // HERE - insert your `findOne()` code

    // Assertions below - do not modify them
    console.assert(needle && needle.length === 5, 'Should have length of 5cm', needle);
    console.assert(needle && needle.material === 'metal', 'Should be made out of metal', needle);
    console.assert(needle && needle.weight === 1, 'Should have weight of 1g', needle);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

