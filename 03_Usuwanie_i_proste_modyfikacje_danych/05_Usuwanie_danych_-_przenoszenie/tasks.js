import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'tasks';
const completedCollectionName = 'completedTasks';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url, {useUnifiedTopology: true});
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    const collection = db.collection(collectionName);
    const completedCollection = db.collection(completedCollectionName);

    // 1. UPDATE TASK

    let unfinishedTasks = await collection.find({}).toArray();
    console.assert(unfinishedTasks && unfinishedTasks.length === 2, 'Should have two unfinished tasks', unfinishedTasks);
    let completedTasks = await completedCollection.find({}).toArray();
    console.assert(completedTasks && completedTasks.length === 1, 'Should have one completed task', completedTasks);

    // 2. REVERT CHANGES HERE

    unfinishedTasks = await collection.find({}).toArray();
    console.assert(unfinishedTasks && unfinishedTasks.length === 3, 'Should have three unfinished tasks again', unfinishedTasks);
    completedTasks = await completedCollection.find({}).toArray();
    console.assert(completedTasks && completedTasks.length === 0, 'Should have no completed task', completedTasks);
    const taskWithNewDate = await collection.findOne({name: 'Change lightbulbs'});
    console.assert(taskWithNewDate && taskWithNewDate.dueDate > new Date().getTime(),
      'Should have new due date in the future', taskWithNewDate);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

