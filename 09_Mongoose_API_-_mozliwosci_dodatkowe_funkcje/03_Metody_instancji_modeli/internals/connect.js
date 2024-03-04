import mongoose from 'mongoose';

// Connection url
const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

let mongoDb;

export const dropCollection = async (db, collectionName) => {
  try {
    await db.dropCollection(collectionName);
  } catch (err) {
    console.log(`Drop failed, ${collectionName} does not exist yet...`);
  }
};

export const connectToMongoose = async (collectionName) => {
  if (mongoDb) {
    return mongoDb;
  }

  await mongoose.connect(`${url}/${dbName}`, {useNewUrlParser: true});
  mongoDb = mongoose.connection.db;
  console.log('Successfully connected Mongoose to the database.');

  // Mongoose has a very specific mapping of model name to collection
  if (collectionName) {
      await dropCollection(mongoose.connection.db, collectionName);
  }

  return mongoDb;
};
