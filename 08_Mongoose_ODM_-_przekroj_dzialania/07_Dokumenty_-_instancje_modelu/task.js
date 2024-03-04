import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let tomato;

    // Add all of your code below

    await runAssertions(tomato);
  } catch (err) {
    console.log('Error when running the task: ', err);
    console.assert(!err, 'Should not trigger error handler!', err);
  }
})();
