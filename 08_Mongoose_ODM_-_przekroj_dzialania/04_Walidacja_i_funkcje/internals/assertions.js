import mongoose from 'mongoose';

export const runAssertions = async (schema) => {
  console.assert(schema, 'Should be defined', schema);

  const Game = new mongoose.model('Game', schema);

  const game = new Game({
    title: 'Splinter Cell',
    publisher: 'Ubisoft'
  });
  let err = null;

  // Check required
  try {
    await game.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && err.message.includes('Path `releaseDate` is required.'),
    'Should require "releaseDate"', err && err.message);
  err = null;

  // Check meanRating validation
  try {
    game.releaseDate = new Date();
    game.meanRating = 0.5;
    await game.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && !err.message.includes('Path `releaseDate` is required.'),
    'Should not throw on validating "releaseDate"', err && err.message);
  console.assert(err && err.message.includes('Mean rating should be between 1 and 10, is: 0.5'),
    'Should throw mean rating validation error', err && err.message);
  err = null;

  // Check tags validation
  try {
    game.meanRating = 3.5;
    game.tags = ['platformer'];
    await game.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && !err.message.includes('Mean rating should be between 1 and 10, is: 0.5'),
    'Should not throw on validating "meanRating"', err && err.message);
  console.assert(err && err.message.includes('tags.0: `platformer` is not a valid enum value for path `tags.0'),
    'Should throw on incorrect tag', err && err.message);
  err = null;

  // Check retailPrice validation
  try {
    game.tags = ['rpg'];
    game.retailPrice = -1;
    await game.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && !err.message.includes('tags.0: `platformer` is not a valid enum value for path `tags.0'),
    'Should not throw on validating tags', err && err.message);
  console.assert(err && err.message.includes(' Retail price should be bigger or equal to 0, is: -1'),
    'Should throw on incorrect price', err && err.message);
  err = null;

  // Check comments validation
  try {
    game.retailPrice = 120;
    await game.validate();
  } catch (error) {
    err = error;
  }
  console.assert(err && !err.message.includes('Retail price should be bigger or equal to 0, is: -1'),
    'Should not throw on validating retail price', err && err.message);
  console.assert(err && err.message.includes('comments: Comments cannot be empty'),
    'Should throw on empty comments', err && err.message);
  err = null;
};
