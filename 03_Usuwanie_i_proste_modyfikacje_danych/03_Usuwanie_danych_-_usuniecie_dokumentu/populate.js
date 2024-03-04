import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'orders';

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

    const now = new Date();

    await db.collection(collectionName).insertMany([{
      name: 'RC Drone',
      quantity: 10,
      price: 999.19,
      orderDate: new Date(now.getTime()).setFullYear(now.getFullYear() - 3)
    }, {
      name: 'Android phone',
      quantity: 3,
      price: 345.15,
      orderDate: new Date(now.getTime()).setFullYear(now.getFullYear() - 1)
    }, {
      name: 'Laptop computer',
      quantity: 1,
      price: 1245.12,
      orderDate: new Date(now.getTime()).setFullYear(now.getFullYear() - 4)
    }, {
      name: 'Stream microphone',
      quantity: 1,
      price: 1245.12,
      orderDate: new Date(now.getTime()).setMonth(now.getMonth() - 3)
    }]);
    console.log(`Inserted ${collectionName} into the collection`);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

