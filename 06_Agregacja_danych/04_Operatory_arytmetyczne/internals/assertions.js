export const runAssertions = async (data = []) => {
  console.assert(data.length === 8,  'Should have 8 entries', data.length);
  console.assert(data[0] && data[0].distanceCovered === 406246,
    'Should have proper distance covered', data[0]);
  console.assert(data[0] && data[0].areaCovered === 2030085,
    'Should have proper area covered', data[0]);
};
