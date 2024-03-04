import mongoose from 'mongoose';

import { runAssertions } from './internals/assertions';

(async function () {
  try {
    let gameSchema;

    // Put your schema here

    await runAssertions(gameSchema);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
