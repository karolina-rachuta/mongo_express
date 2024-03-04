import { connectToMongoose } from './connect';

export const runAssertions = async (tomato = {}) => {
  console.assert(tomato.Portions, 'Should have "Portions" defined', tomato.Portions);
  console.assert(tomato.Portions && tomato.Portions.MEDIUM === 75,
    'Should have MEDIUM set', tomato.Portions);

  const dbExercises = await connectToMongoose();

  const dbTomato = (await dbExercises.collection('ingredients').findOne({
    Name: 'Tomato'
  })) || {};

  console.assert(dbTomato.calories === tomato.calories,
    'Should have the same calorie count', dbTomato);
  console.assert(dbTomato.FlavorValues, 'Should have default flavor values', dbTomato.FlavorValues);
  console.assert(dbTomato.FlavorValues.UMAMI === 0,
    'Should have proper UMAMI default value', dbTomato.FlavorValues);
};
