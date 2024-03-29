import MongoClient from 'mongodb';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'albums';

(async function () {
    try {
        // Connect using MongoClient
        const client = await MongoClient.connect(url, {useUnifiedTopology: true});
        console.log('Successfully connected to local MongoDB instance.');

        // Get DB instance
        const db = client.db(dbName);

        const collection = db.collection(collectionName);

        // HERE - modify this "find" code!
        let albums;

        const cursor = collection.find({
            "listened": {
                $ne: true
            },
            "artist": {
                $in: ["The Beatles", "Pink Floyd"]
            }
        })

        albums = await cursor.toArray();
        console.log(albums)

        let almbumsForEach = [];
        await cursor.forEach((doc) => almbumsForEach.push(doc));
        console.log(almbumsForEach)

        // Assertions here
        console.assert(albums && albums.length === 3, 'Should have find 3 albums', albums);

        await client.close();

        return process.exit(0);
    } catch (err) {
        console.log('Something went wrong!', err);
        return process.exit(1);
    }
})();

