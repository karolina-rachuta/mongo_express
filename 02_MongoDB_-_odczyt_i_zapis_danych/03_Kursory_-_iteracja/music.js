// import MongoClient from 'mongodb';
//
// // Connection url
// const url = 'mongodb://localhost:27017';
//
// // Database name
// const dbName = 'exercises';
//
// // Collection Name
// const collectionName = 'music';
//
// (async function () {
//   try {
//     // Connect using MongoClient
//     const client = await MongoClient.connect(url,  { useUnifiedTopology: true });
//     console.log('Successfully connected to local MongoDB instance.');
//
//     // Get DB instance
//     const db = client.db(dbName);
//
//     // Get collection
//     const collection = db.collection(collectionName);
//
//     // HERE - insert iteration using "forEach" method
//     let toListenTimeForEach = 0;
//
//     let toListenForEach = collection.find({listened:false},{timeout:false});
//
//     await toListenForEach.forEach(doc =>{
//       toListenTimeForEach += doc.length
//     })
//     console.log("forEach", toListenTimeForEach);
//
//     // Assertions below - do not change them
//     console.assert(toListenTimeForEach === 4897, 'Should sum up to 4897 seconds', toListenTimeForEach);
//
//     // HERE - insert iteration using "next()" method
//     let toListenTimeNext = 0;
//     let toListen =  collection.find({listened:false},{timeout:false});
//
//     while(await toListen.hasNext()){
//       const  nextDoc = await toListen.next();
//       toListenTimeNext += nextDoc.length;
//     }
//     console.log("next", toListenTimeNext);
//
//     // Assertions below - do not change them
//     console.assert(toListenTimeForEach === toListenTimeNext, 'Should be equal between two methods', toListenTimeNext);
//
//     await client.close();
//
//     return process.exit(0);
//   } catch (err) {
//     console.log('Something went wrong!', err);
//     return process.exit(1);
//   }
// })();

import MongoClient from 'mongodb';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'music';

(async function () {
  try {
    // Connect using MongoClient
    const client = await MongoClient.connect(url,  { useUnifiedTopology: true });
    console.log('Successfully connected to local MongoDB instance.');

    // Get DB instance
    const db = client.db(dbName);

    // Get collection
    const collection = db.collection(collectionName);

    // HERE - insert iteration using "forEach" method
    let toListenTimeForEach = 0;
    const unheardSongs = collection.find({listened: false})
    await unheardSongs.forEach((song) => {toListenTimeForEach += song.length})
    console.log("toListenTimeForEach", toListenTimeForEach)
    // Assertions below - do not change them
    console.assert(toListenTimeForEach === 4897, 'Should sum up to 4897 seconds', toListenTimeForEach);


    // HERE - insert iteration using "next()" method
    let toListenTimeNext = 0;
    const unheardSongsHasNext = collection.find({listened: false})
    while (await unheardSongsHasNext.hasNext()) {
      const nextMusic = await unheardSongsHasNext.next();
      toListenTimeNext += nextMusic.length;
    }
  console.log("next", toListenTimeNext)
    // Assertions below - do not change them
    console.assert(toListenTimeForEach === toListenTimeNext, 'Should be equal between two methods', toListenTimeNext);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

