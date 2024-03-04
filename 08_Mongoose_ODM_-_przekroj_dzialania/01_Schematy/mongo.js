import Joi from '@hapi/joi';

import { runAssertionsMongo } from './internals/assertions';

(async function () {
  try {
    let schema;

    // Prepare Joi schema below

    await runAssertionsMongo(schema);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
