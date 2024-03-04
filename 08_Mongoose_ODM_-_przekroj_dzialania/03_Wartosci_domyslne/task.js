import mongoose from 'mongoose';

import { runAssertions } from './internals/assertions';

(async function () {
  try {
    let transactionSchema;

    // Put your schema here

    await runAssertions(transactionSchema);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
