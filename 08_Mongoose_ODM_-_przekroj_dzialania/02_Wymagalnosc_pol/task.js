import mongoose from 'mongoose';

import { runAssertions } from './internals/assertions';

(async function () {
  try {
    let appSchema;

    // Put your schema here

    await runAssertions(appSchema);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
