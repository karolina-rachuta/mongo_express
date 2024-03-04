export const runAssertions = async (outCol, mergeCol) => {
  const outResults = await outCol.find().toArray();
  const mergeResults = await mergeCol.find().toArray();

  for (let i = 0 ; i < outResults.length; i++) {
    console.assert((outResults[i] && outResults[i].totalTime) === (mergeResults[i] && mergeResults[i].totalTime),
      'Should have the same total times', outResults[i], mergeResults[i]);
  }

  console.assert(outResults[0] && outResults[0].totalTime === 5887000,
    'Should have the fastest driver in out', outResults[0]);
  console.assert(mergeResults[0] && mergeResults[0].totalTime === 5887000,
    'Should have the fastest driver in merge', mergeResults[0]);
};
