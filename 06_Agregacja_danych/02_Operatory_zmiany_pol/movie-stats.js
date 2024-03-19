import MongoClient from 'mongodb';
import {runAssertions} from './internals/assertions.js';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'clothes';

(async function () {
    try {
        // Connect using MongoClient
        const client = await MongoClient.connect(url, {useUnifiedTopology: true});
        console.log('Successfully connected to local MongoDB instance.');

        // Get DB instance
        const db = client.db(dbName);

        const collection = db.collection(collectionName);

        let addUnsetData = [];
        let projectData = [];

        // INSERT YOUR CODE HERE

        //     addUnsetData = await collection.aggregate([
        //         {
        //             '$addFields': {
        //                 'meanWatchTime': {'$avg': '$watchTime'},
        //                 'meanRating': {'$avg': '$ratings'}
        //             }
        //         },
        //         {
        //             '$unset':
        //                 [
        //                     'watchTime', 'ratings'
        //                 ]
        //         }
        //
        // ]).toArray();
        //
        //     projectData = await collection.aggregate([
        //         {
        //             $project: {
        //                 meanWatchTime: {$avg: '$watchTime'},
        //                 meanRating: {'$avg': '$ratings'}
        //             }
        //         }
        //     ])
        addUnsetData = await collection.aggregate([
            {
                '$addFields': {
                    'meanWatchTime': {
                        '$avg': '$watchTime'
                    },
                    'meanRating': {
                        '$avg': '$ratings'
                    }
                }
            }, {
                '$unset': [
                    'watchTime', 'ratings'
                ]
            }
        ]).toArray();

        projectData = await collection.aggregate([
            {
                $project: {
                    meanWatchTime: {$avg: '$watchTime'},
                    meanRating: {$avg: '$ratings'}
                }
            }
        ]).toArray();

        console.log(addUnsetData)
        console.log(projectData)

        // Assertions below
        await runAssertions(addUnsetData, projectData);

        await client.close();

        return process.exit(0);
    } catch
        (err) {
        console.log('Something went wrong!', err);
        return process.exit(1);
    }
})
();

