import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let data;

    // Add all of your code below

    await runAssertions(data);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
