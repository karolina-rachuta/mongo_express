export const runAssertions = (data = []) => {
  console.assert(data && data.length, 'Should be defined and have some results', data && data.length);
  console.assert(data && data.length === 2, 'Should have 2 filtered results', data && data.length);

  const aWeekOfWine = (data && data.find(dt => dt.title === 'A Week of Wine')) || {};
  console.assert(aWeekOfWine.price === 850, 'Should find "A Week of Wine" with proper price', aWeekOfWine);
  console.assert(aWeekOfWine.region === 'Napa/Sonoma Counties',
    'Should expose "region" field from the database', aWeekOfWine.region);
};
