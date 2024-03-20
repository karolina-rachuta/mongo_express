import MongoClient from 'mongodb';
import {runAssertions} from './internals/assertions.js';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'raceResults'
const collectionNameOut = 'outRaceResults';
const collectionNameMerge = 'mergeRaceResults';

(async function () {
    try {
        // Connect using MongoClient
        const client = await MongoClient.connect(url, {useUnifiedTopology: true});
        console.log('Successfully connected to local MongoDB instance.');

        // Get DB instance
        const db = client.db(dbName);

        // Try to drop old collection, if existing
        try {
            await db.dropCollection(collectionNameOut);
            await db.dropCollection(collectionNameMerge);
        } catch (err) {
        }

        const collection = db.collection(collectionName);
        let mergeData;
        let outData;
        // INSERT YOUR CODE HERE - for $out

        outData = await collection.aggregate([
            {
                $addFields: {
                    totalTime: {'$sum': '$lapTimes'}
                }
            },
            {
                $sort: {
                    totalTime: 1
                }
            },
            {
                $out: "collectionTimeOut"
            }
        ]).toArray()

        // INSERT YOUR CODE HERE - for $merge
        mergeData = await collection.aggregate([
            {
                $addFields:
                    {
                        totalTime: {'$sum': '$lapTimes'}
                    }
            },
            {
                $sort: {
                    totalTime: 1
                }
            }, {
                $project: {
                    lapTimes: 0
                }
            },
            {
                $merge:  'collectionTimeMerge'
            }
        ]).toArray();

        console.log(mergeData, outData)

        // Assertions below
        const outCollection = db.collection(collectionNameOut);
        const mergeCollection = db.collection(collectionNameMerge);
        await runAssertions(outCollection, mergeCollection);

        await client.close();

        return process.exit(0);
    } catch (err) {
        console.log('Something went wrong!', err);
        return process.exit(1);
    }
})();

