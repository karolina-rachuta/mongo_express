export const runAssertions = async collection => {
  const problematicDocs = await collection.find({
    $or: [ { 'samples.depth': { $gte: 100 } }, { 'samples.depth': { $lte: 10 } } ]
  }).toArray();

  console.assert(problematicDocs && problematicDocs.length === 0,
    'Should not have any docs with problematic samples', problematicDocs);

  const docWithNewSamples = await collection.findOne({
    _id: '123456'
  });
  console.assert(docWithNewSamples, 'Should be defined', docWithNewSamples);
  const samples = (docWithNewSamples && docWithNewSamples.samples) || [];
  console.assert(samples.length === 7, 'Should have 7 samples in "123456"', samples);
  console.assert(samples[6] && samples[6].depth === 65,
    'Should have last sample depth of "65"', samples[6]);

  const docWithRemovedSasmples = await collection.findOne({
    _id: '789101112'
  });

  console.assert(docWithRemovedSasmples, 'Should be defined', docWithRemovedSasmples);
  const secondSamples = (docWithRemovedSasmples && docWithRemovedSasmples.samples) || [];
  console.assert(secondSamples.length === 5, 'Should have 5 samples in "789101112"', samples);
  console.assert(secondSamples[0] && secondSamples[0].depth === 97,
    'Should have first sample depth of "97"', samples[6]);
  console.assert(secondSamples[4] && secondSamples[4].depth === 85,
    'Should have first sample depth of "97"', samples[4]);
};
