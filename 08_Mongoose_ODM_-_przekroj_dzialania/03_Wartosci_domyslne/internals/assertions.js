import mongoose from 'mongoose';

export const runAssertions = async (schema) => {
  console.assert(schema, 'Should be defined', schema);

  const Transaction = mongoose.model('Transactions', schema);

  let err;
  try {
    const missingBoughtBy = new Transaction({
      code: 'GOOG',
        currentVal: 1279.31,
      amount: 100,
      transactionDate: new Date().getTime(),
    });
    await missingBoughtBy.validate();
  } catch (error) {
    err = error;
  }

  console.assert(err && err.message === 'Transactions validation failed: boughtBy: Path `boughtBy` is required.',
    'Should require boughtBy', err && err.message);
  err = null;

  try {
    const defaultValuesUser = new Transaction({
      code: 'GOOG',
      currentVal: 1279.31,
      boughtBy: 123123
    });
    await defaultValuesUser.validate();

    console.assert(defaultValuesUser.amount === 10, 'Should have proper default value', defaultValuesUser.amount);
    console.assert(defaultValuesUser.transactionDate.getTime() <= new Date().getTime(), 'Should have proper default data', defaultValuesUser.transactionDate);
  } catch (error) {
    err = error;
  }

  console.assert(!err, 'Should not generate error for valid user', err);
};
