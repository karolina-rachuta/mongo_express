import MongoClient from 'mongodb';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'logs';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url, {useUnifiedTopology: true});
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

    const collection = db.collection(collectionName);

    const logString = '5e6bb094fc13ae75dc000000,users,2019-01-31T13:39:48Z,WARN,User does not have first name!;' +
      '5e6bb094fc13ae75dc000001,login,2019-12-12T07:34:12Z,INFO,User logged in;' +
      '5e6bb094fc13ae75dc000002,users,2020-01-13T20:52:17Z,ERROR,User not found!;' +
      '5e6bb094fc13ae75dc000003,login,2019-02-26T17:05:03Z,ERROR,User cannot log in - incorrect password;' +
      '5e6bb094fc13ae75dc000004,users,2019-02-01T01:05:12Z,DEBUG,Current user id: 123456;' +
      '5e6bb094fc13ae75dc000005,payments,2019-08-03T04:51:51Z,DEBUG,Payment successful for test user 4562234;' +
      '5e6bb094fc13ae75dc000006,login,2019-01-13T22:52:15Z,INFO,User 789796 logged out;' +
      '5e6bb094fc13ae75dc000007,users,2019-01-09T00:27:35Z,DEBUG,User successfully changed name;' +
      '5e6bb094fc13ae75dc000008,apps,2019-03-28T14:17:42Z,WARN,User tried to access the app that does not exist;' +
      '5e6bb094fc13ae75dc000009,apps,2019-06-26T02:24:49Z,DEBUG,App 678698745 initialized properly';

    // HERE - parse the string and insert to the DB below!

    // Assertions below - do not modify them!
    const messages = collection.find({});
    console.assert(await messages.count() === 10, 'Should have 10 logs', messages.length);

    const appMessageWarn = (await collection.findOne({ severity: 'WARN', domain: 'apps'}) || {});
    console.assert(appMessageWarn.message === 'User tried to access the app that does not exist',
      'Should match proper message', appMessageWarn);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

