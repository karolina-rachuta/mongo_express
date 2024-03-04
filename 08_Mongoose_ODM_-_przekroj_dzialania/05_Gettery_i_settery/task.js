import mongoose from 'mongoose';

import { runAssertions } from './internals/assertions';

(async function () {
  try {
    let stockTransactionSchema;

    // Put your schema here

    await runAssertions(stockTransactionSchema);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
