import mongoose from 'mongoose';

export const runAssertions = async (schema) => {
  console.assert(schema, 'Should be defined', schema);

  const Transaction = new mongoose.model('Transaction', schema);

  const transaction = new Transaction({
    price: 1275.8889078965455698677685896857646,
    amount: 100,
    market: 'NASDAQ',
    symbol: 'GOOG'
  });

  let err;
  try {
    await transaction.validate();
  } catch (error) {
    err = error;
  }

  console.assert(err && err.message ===
    'Transaction validation failed: industry: Path `industry` is required.',
    'Should require industry', err && err.message);

  console.assert(transaction.price === 1275.89,
    'Should round price when getting it', transaction.price);

  transaction.price = 1275.789809890809789;
  console.assert(transaction.price === 1275.79,
    'Should round price when setting it', transaction.price);
};
