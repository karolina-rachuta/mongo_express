import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'tasks';

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
      name: 'Get groceries for the party',
      done: true,
      dueDate: new Date(now.getTime()).setMonth(now.getMonth() - 1), // Setting some date in the past
      priority: 'medium'
    }, {
      name: 'Change lightbulbs',
      done: false,
      dueDate: now,
      priority: 'high'
    }, {
      name: 'Clean up the dresser',
      done: false,
      dueDate: new Date(now.getTime()).setDate(now.getDate() + 7),
      priority: 'low'
    }, {
      name: 'Change the oil',
      done: false,
      dueDate: new Date(now.getTime()).setDate(now.getDate() + 7),
      priority: 'high'
    }]);
    console.log(`Inserted ${collectionName} data into the collection`);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

