import mongoose from 'mongoose';

import populate from './internals/populate';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await populate();

    let students;
    let mappedResults;

    // Add all of your code below

    await runAssertions(students, mappedResults);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
