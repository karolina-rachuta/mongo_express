import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'movies';

(async function () {
    try {
        // Connect using MongoClient
        const client = await MongoClient.connect(url, {useUnifiedTopology: true});
        console.log('Successfully connected to local MongoDB instance.');

        // Get DB instance
        const db = client.db(dbName);

        const collection = db.collection(collectionName);

        // HERE - add your update code
        // collection.updateMany(
        //     {
        //         series: {
        //             $in: ['Mad Max', 'Mission: Impossible']
        //         }
        //     },
        //     {
        //         $set: {
        //             seen: true
        //         }
        //     })

        collection.updateMany(
            {
                series: 'Mad Max'
            },
            {
                $set: {seen: true}
            });

        collection.updateMany(
            {
                series: 'Mission: Impossible'
            },
            {
                $set: {seen: true}
            })


        // Assertions below - do not modify them!
        const madMaxMovies = await collection.find({series: 'Mad Max'}).toArray();
        madMaxMovies.forEach(movie => {
            console.assert(movie.seen === true, 'Movie should be seen: ', movie.title);
        });
        console.log(madMaxMovies)
        const miMovies = await collection.find({series: 'Mission: Impossible'}).toArray();
        miMovies.forEach(movie => {
            console.assert(movie.seen === true, 'Movie should be seen: ', movie.title);
        });
        console.log(miMovies)
        // Check if other movies were not updated
        const lotrMovie = await collection.findOne({title: 'The Lord of the Rings: The Two Towers'});
        console.assert(lotrMovie.seen === false, 'Lord of the Rings should still be unseen!', lotrMovie);
        console.log(lotrMovie)
        await client.close();

        return process.exit(0);
    } catch (err) {
        console.log('Something went wrong!', err);
        return process.exit(1);
    }
})();

