import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'numbers';

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

    await db.collection(collectionName).insertMany([
      {
        firstName: 'Janina',
        lastName: 'Nowak',
        phoneNo: '48600600600',
        company: 'JN sp. z o.o.'
      }, {
        firstName: 'Jan',
        lastName: 'Kowalski',
        phoneNo: '48691919191',
        company: 'JK sp. j.'
      }, {
        firstName: 'Mariusz',
        lastName: 'Mąkalski',
        phoneNo: '48561345123',
        company: 'M&M'
      }, {
        firstName: 'Olaf',
        lastName: 'Blue',
        phoneNo: '48791234876',
        company: 'Gogl'
      }, {
      firstName: 'Jan',
        lastName: 'Nowacki',
        phoneNo: '48754456654',
        company: 'NileRiver'
      }
    ]);
    console.log(`Inserted ${collectionName} data into the collection`);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

