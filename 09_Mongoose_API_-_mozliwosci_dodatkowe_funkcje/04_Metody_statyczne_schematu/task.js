import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let Book;

    // Add all of your code below

    await runAssertions(Book);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
