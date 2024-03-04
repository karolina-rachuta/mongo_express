export const runAssertions = (data = []) => {
  console.assert(data.length === 4, 'Should return 4 items', data);

  const jamie = data.find(entry => entry.amount === 9) || {};
  console.assert(jamie.eventName === 'Jamie Cullum Live', 'Should include Jamie Cullum event',
    jamie);
};
