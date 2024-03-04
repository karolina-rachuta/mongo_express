export const runAssertions = async collection => {
  const resultsWithGradesBelow0 = await collection.find({
    'results.score': { $lt: 0 }
  }).toArray();

  console.assert(resultsWithGradesBelow0.length === 0,
    'Should not have any results with scores below 0 anymore',
  resultsWithGradesBelow0);

  const newResults = await collection.find({}).toArray();
  const lastResult = (newResults && newResults[newResults.length -1]) || { results: []};

  console.assert(lastResult.results.length === 5,
    'Should have 5 entries', lastResult);
  console.assert(lastResult.results[0] && lastResult.results[0].score === 35,
    'Should properly adjust the first score', lastResult);
  console.assert(lastResult.results[4] && lastResult.results[4].score === 95,
    'Should properly adjust the last score', lastResult);
};
