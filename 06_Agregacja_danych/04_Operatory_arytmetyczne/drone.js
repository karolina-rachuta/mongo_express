import MongoClient from 'mongodb';
import {runAssertions} from './internals/assertions.js';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'droneData';

(async function () {
    try {
        // Connect using MongoClient
        const client = await MongoClient.connect(url, {useUnifiedTopology: true});
        console.log('Successfully connected to local MongoDB instance.');

        // Get DB instance
        const db = client.db(dbName);

        const collection = db.collection(collectionName);

        let data = [];
        // INSERT YOUR CODE HERE
        data = await collection.aggregate([{
            '$match': {'isComplete': true}
        }, {
            $project: {
                areaCovered: {$multiply: ['$fieldLength', '$fieldWidth']},
                distanceCovered: {$sum: [{$multiply: ['$fieldLength', {'$divide': ['$fieldWidth', 5]}]}, '$fieldWidth']}
            }
        }]).toArray()

        console.log(data)
        // Assertions below
        await runAssertions(data);

        await client.close();

        return process.exit(0);
    } catch (err) {
        console.log('Something went wrong!', err);
        return process.exit(1);
    }
})();

