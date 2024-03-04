import mongoose from 'mongoose';

import populate from './internals/populate';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await populate();

    let Comment;
    let Movie;

    // Add all of your code below

    await runAssertions(Comment, Movie);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
