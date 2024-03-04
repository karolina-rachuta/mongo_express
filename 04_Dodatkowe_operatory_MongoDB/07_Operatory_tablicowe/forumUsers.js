import MongoClient from 'mongodb';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'forumUsers';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    // HERE - modify this "find" code!
    const forumUsersToUpgrade = collection.find({});

    // Assertions below
    const usersArr = await forumUsersToUpgrade.toArray();
    console.assert(usersArr && usersArr.length === 2,
      'Should find two forum users to upgrade', usersArr && usersArr.length);
    console.assert(usersArr && usersArr[0] && usersArr[0].nick === 'bgaler9',
      'Should find Bernetta as the first user to upgrade', usersArr && usersArr[0]);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

