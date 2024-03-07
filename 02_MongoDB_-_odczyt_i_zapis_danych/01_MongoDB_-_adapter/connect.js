// Add MongoClient import here
// Add MongoClient import here
import { MongoClient, Binary, Code } from 'mongodb';

// Add your database URL here
let mongoURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongoURL, { useNewUrlParser: true });

// This variable will be used in the assertion. Assign proper DB connection value to it
let connected = false;

// DB and collection names - do not change them
const dbName = 'nodowcy';
const collectionName = 'connectionTest';

(async function() {
  let connection;
  connected = await client.connect()
  console.log("Connected", connected)

  console.assert(!!connected === true, 'Should be connected', !!connected);

  if (connected) {
    const db = client.db(dbName);
    try {
      await db.dropCollection(collectionName);
    } catch (err) {
      // No op if collection does not exist
    }

    await db.createCollection(collectionName);
    const collection = db.collection(collectionName);
    await collection.insertOne({
      name: 'Test Connection',
      status: true,
      numValue: 129,
      dateConnected: new Date(),
      arrayTest: [1,2,3],
      codeExample: new Code('function() {console.log(\'Hello World!\');}'),
      binData: new Binary(Buffer.alloc(16, 'aa456423425234fbc34124b'), 0),
    });

    await client.close();
  }
})();



// Add your database URL here
// let mongoURL = '';
//
// // This variable will be used in the assertion. Assign proper DB connection value to it
// let connected = false;
//
// // DB and collection names - do not change them
// const dbName = 'exercises';
// const collectionName = 'connectionTest';
//
// (async function() {
//   let connection;
//
//   // Implement connecting to the database here
//
//
//   console.assert(connected === true, 'Should be connected', connected);
//
//   if (connected) {
//     const db = connection.db(dbName);
//     try {
//       await db.dropCollection(collectionName);
//     } catch (err) {
//       // No op if collection does not exist
//     }
//
//     await db.createCollection(collectionName);
//     const collection = db.collection(collectionName);
//     await collection.insertOne({
//       name: 'Test Connection',
//       status: true,
//       numValue: 129,
//       dateConnected: new Date(),
//       arrayTest: [1,2,3],
//       codeExample: new MongoClient.Code('function() {console.log(\'Hello World!\');}'),
//       binData: new MongoClient.Binary(Buffer.alloc(16, 'aa456423425234fbc34124b'), 0),
//     });
//
//     await connection.close();
//   }
// })();
//
