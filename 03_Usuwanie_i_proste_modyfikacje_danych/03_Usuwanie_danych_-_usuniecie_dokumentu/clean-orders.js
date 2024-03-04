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
    const client = await MongoClient.connect(url, {useUnifiedTopology: true});
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    const allOrders = await collection.find({}).toArray();
    console.assert(allOrders && allOrders.length === 4, 'Should have 4 orders', allOrders);

    // REMOVE PROPER ENTRIES HERE

    const ordersAfterCleaningUp = await collection.find({}).toArray();
    console.assert(ordersAfterCleaningUp && ordersAfterCleaningUp.length === 2, 'Should have 2 orders after cleaning up', allOrders);
    const orderNames = (ordersAfterCleaningUp && ordersAfterCleaningUp.map(order => order.name)) || [];
    console.assert(orderNames.includes('Stream microphone') && orderNames.includes('Android phone'),
      'Should have microphone and phone still present', orderNames);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

