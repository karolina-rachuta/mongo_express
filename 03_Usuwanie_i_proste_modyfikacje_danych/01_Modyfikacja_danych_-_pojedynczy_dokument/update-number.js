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
    const client = await MongoClient.connect(url, {useUnifiedTopology: true});
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    // HERE - add your update code

    // Assertions below - do not modify them!
    const changedContact = await collection.findOne({phoneNo: '48616161616'});
    console.assert(changedContact !== null, 'Contact should be found by new phone number!', changedContact);

    const unchangedContact = await collection.findOne({phoneNo: '48754456654'});
    console.assert(unchangedContact && unchangedContact.firstName === 'Jan' && unchangedContact.lastName === 'Nowacki',
      'Should find unchanged contact with the same first name', unchangedContact);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

