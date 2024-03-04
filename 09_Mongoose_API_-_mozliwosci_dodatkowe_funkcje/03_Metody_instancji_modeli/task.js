import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let Order;

    // Add all of your code below

    await runAssertions(Order);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
