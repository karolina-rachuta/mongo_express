import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Names
const collectionName = 'tasks';
const completedCollectionName = 'completedTasks';

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

    // Drop old "completedTasks" collection
    try {
      await db.dropCollection(completedCollectionName);
      console.log(`Dropped old ${completedCollectionName} collection`);
    } catch (err) {
      console.log('Collection does not exist yet, proceeding further');
    }

    // Add all the entries
    await db.createCollection(collectionName);
    console.log(`Created new ${collectionName} collection`);

    await db.createCollection(completedCollectionName);
    console.log(`Created new ${completedCollectionName} collection`);

    const now = new Date();

    await db.collection(collectionName).insertMany([{
      name: 'Change lightbulbs',
      dueDate: now,
      priority: 'high'
    }, {
      name: 'Clean up the dresser',
      dueDate: new Date(now.getTime()).setDate(now.getDate() + 7),
      priority: 'low'
    }, {
      name: 'Change the oil',
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

