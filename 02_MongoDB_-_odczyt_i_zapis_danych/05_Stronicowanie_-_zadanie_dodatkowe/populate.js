import MongoClient from 'mongodb';

// Connection url

const url = 'mongodb://localhost:27017';

// Database name
const dbName = 'exercises';

// Collection Name
const collectionName = 'telNumbers';

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

    const collection = db.collection(collectionName);
    await collection.insertMany([{
      name: 'Rolando Faust',
      address: '01 Nova Place',
      telNumber: '885-898-1072'
    }, {
      name: 'Roseanne Mushawe',
      address: '6088 Kedzie Road',
      telNumber: '386-418-1248'
    }, {
      name: 'Wandie Accum',
      address: '73546 Butterfield Avenue',
      telNumber: '254-930-6234'
    }, {
      name: 'Kaitlin Tuther',
      address: '66811 Vermont Road',
      telNumber: '728-981-3344'
    }, {
      name: 'Rebeka Saunder',
      address: '18135 Longview Road',
      telNumber: '976-127-6692'
    }, {
      name: 'Iain Danielski',
      address: '8 Golf View Trail',
      telNumber: '260-602-7461'
    }, {
      name: 'Camille Elmes',
      address: '36318 Oriole Point',
      telNumber: '573-476-8283'
    }, {
      name: 'Paola Biasi',
      address: '121 Barby Avenue',
      telNumber: '614-782-5123'
    }, {
      name: 'Melissa Rattray',
      address: '4166 Summit Terrace',
      telNumber: '833-692-4669'
    }, {
      name: 'Elsy Flecknoe',
      address: '9 Bay Junction',
      telNumber: '208-390-8304'
    }, {
      name: 'Julieta Lemmer',
      address: '0775 Alpine Trail',
      telNumber: '331-433-7338'
    }, {
      name: 'Lilia Mountjoy',
      address: '064 Arizona Road',
      telNumber: '979-110-9393'
    }, {
      name: 'Ring Spenceley',
      address: '0001 Anniversary Street',
      telNumber: '501-835-4088'
    }, {
      name: 'Biddie Lightman',
      address: '4876 Loomis Park',
      telNumber: '338-317-6767'
    }, {
      name: 'Joyous Woolf',
      address: '73 Brentwood Way',
      telNumber: '721-962-5123'
    }, {
      name: 'Enrique Burgan',
      address: '3631 Dennis Junction',
      telNumber: '314-570-1648'
    }, {
      name: 'Cherish Cleugher',
      address: '90 Surrey Park',
      telNumber: '750-168-7463'
    }, {
      name: 'Irene Petkov',
      address: '80841 Carioca Junction',
      telNumber: '361-427-4074'
    }, {
      name: 'Sholom Kelshaw',
      address: '11 Mallory Junction',
      telNumber: '832-202-7747'
    }, {
      name: 'Cathlene Kintzel',
      address: '17 Luster Pass',
      telNumber: '670-756-3287'
    }]);

    console.log(`Inserted ${collectionName} into the collection`);

    await client.close();

    return process.exit(0);
  } catch (err) {
    console.log('Something went wrong!', err);
    return process.exit(1);
  }
})();

