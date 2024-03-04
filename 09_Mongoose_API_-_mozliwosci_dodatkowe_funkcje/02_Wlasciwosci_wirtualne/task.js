import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let books; // find() result should be assigned to this property
    let Book; // Book model should be assigned to this property

    // Add all of your code below

    await runAssertions(Book, books);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
