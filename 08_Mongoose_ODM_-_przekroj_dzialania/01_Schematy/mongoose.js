import mongoose from 'mongoose';

import { runAssertionsMongoose } from './internals/assertions';

(async function () {
  try {
    let schema;

    // Prepare Mongoose schema below

    await runAssertionsMongoose(schema);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
