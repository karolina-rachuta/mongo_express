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
    const client = await MongoClient.connect(url, {useUnifiedTopology: true});
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    // 1. UPDATE TASK HERE

    let updatedChangeLightulbs = await collection.findOne({name: 'Change lightbulbs'});
    let allUnfinishedTasks = await collection.find({done: false}).toArray();
    console.assert(updatedChangeLightulbs && updatedChangeLightulbs.done === true,
      'Should be done!', updatedChangeLightulbs);
    console.assert(allUnfinishedTasks && allUnfinishedTasks.length === 2, 'Should have only 2 unfinished tasks!',
      allUnfinishedTasks);

    // 2. REVERT CHANGES HERE

    updatedChangeLightulbs = await collection.findOne({name: 'Change lightbulbs'});
    allUnfinishedTasks = await collection.find({done: false}).toArray();
    console.assert(updatedChangeLightulbs && updatedChangeLightulbs.done === false,
      'Should be unfinished again!', updatedChangeLightulbs);
    console.assert(updatedChangeLightulbs && updatedChangeLightulbs.dueDate > new Date().getTime(),
      'Should have due date in the future!', updatedChangeLightulbs);
    console.assert(allUnfinishedTasks && allUnfinishedTasks.length === 3, 'Should have 3 unfinished tasks!',
      allUnfinishedTasks);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

