import { connectToMongoose } from './connect';

export const collectionName = 'ingredients';

const data = [
  {
    Name: 'Asparagus',
    Calories: 24,
    CookingTime: 200,
    Tags: {
      Tag: 'Vegetables'
    },
    FlavorValues: {
      SOUR: 3,
      SALT: 0,
      ACID: 0,
      SWEET: 0,
      FAT: 0,
      UMAMI: 0
    },
    Portions: {
      SMALL: 10,
      MEDIUM: 50,
      LARGE: 200
    }
  },
  {
    Name: 'Avocado',
    Calories: 200,
    CookingTime: 0,
    Tags: {
      Tag: 'Fruit'
    },
    FlavorValues: {
      SOUR: 0,
      SALT: 0,
      ACID: 0,
      SWEET: 3,
      FAT: 5,
      UMAMI: 0
    },
    Portions: {
      SMALL: 10,
      MEDIUM: 50,
      LARGE: 200
    }
  },
  {
    Name: 'Bacon',
    Calories: 500,
    CookingTime: 300,
    Tags: {
      Tag: 'Meat'
    },
    FlavorValues: {
      SOUR: 0,
      SALT: 4,
      ACID: 0,
      SWEET: 0,
      FAT: 8,
      UMAMI: 0
    },
    Portions: {
      SMALL: 15,
      MEDIUM: 60,
      LARGE: 150
    }
  },
  {
    Name: 'Banana',
    Calories: 80,
    CookingTime: 0,
    Tags: {
      Tag: 'Fruit'
    },
    FlavorValues: {
      SOUR: 0,
      SALT: 0,
      ACID: 2,
      SWEET: 4,
      FAT: 0,
      UMAMI: 0
    },
    Portions: {
      SMALL: 10,
      MEDIUM: 50,
      LARGE: 200
    }
  },
  {
    Name: 'Basil',
    Calories: 22,
    CookingTime: 0,
    Tags: {
      Tag: 'Spice'
    },
    FlavorValues: {
      SOUR: 10,
      SALT: 0,
      ACID: 0,
      SWEET: 0,
      FAT: 0,
      UMAMI: 0
    },
    Portions: {
      SMALL: 5,
      MEDIUM: 10,
      LARGE: 50
    },
  }
];

(async function () {
  const db = await connectToMongoose(collectionName);
  await db.collection(collectionName).insertMany(data);

  return process.exit(0);
})();
