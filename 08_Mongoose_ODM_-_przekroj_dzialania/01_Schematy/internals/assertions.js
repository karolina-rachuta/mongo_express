import mongoose from 'mongoose';

import { userA, userB } from './data';

export const runAssertionsMongo = async (schema) => {
  if (!schema) {
    return console.assert(false, 'Should have schema passed', schema);
  }

  console.assert(schema, 'Should be defined', schema);
  console.assert(schema.validateAsync, 'Should have validate method');

  let err;
  try {
    await schema.validateAsync(userA);
  } catch (error) {
    err = error;
  }
  console.assert(!err, 'Should validate userA successfully', err);

  try {
    await schema.validateAsync(userB);
  } catch (error) {
    err = error;
  }
  console.assert(err && err.message === '"lastName" is required',
    'Should generate proper validation error', err && err.message);
};

export const runAssertionsMongoose = async (schema) => {
  if (!schema) {
    return console.assert(false, 'Should have schema passed', schema);
  }
  console.assert(schema, 'Should be defined', schema);

  const User = mongoose.model('User', schema);

  let err;
  try {
    let user = new User(userA);
    console.assert(user.validate, 'Should have validate method');
    await user.validate();
  } catch (error) {
    err = error;
  }
  console.assert(!err, 'Should validate userA successfully', err);

  try {
    let user = new User(userB);
    console.assert(user.validate, 'Should have validate method');
    await user.validate();
  } catch (error) {
    err = error;
  }

  console.assert(err && err.message === 'User validation failed: lastName: Path `lastName` is required.',
    'Should generate proper validation error', err && err.message);
};
