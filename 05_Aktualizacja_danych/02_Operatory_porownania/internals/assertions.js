const assertSamples = samples => {
  console.assert(samples[0] && samples[0].depth === 10,
    'Should have min adjusted', samples);
  console.assert(samples[4] && samples[4].depth === 100,
    'Should have max adjusted', samples);
  console.assert(samples.length === 5, 'Should have 5 elements', samples);
};

export const runAssertions = async collection => {
  const data = await collection.find({}).toArray();
  const firstSamples = (data && data[0] && data[0].samples) || [];
  assertSamples(firstSamples);
  const lastSamples = (data && data[4] && data[4].samples) || [];
  assertSamples(lastSamples);
};
