export const runAssertions = async (data = []) => {
  const longSupporters = data.filter(user => user.isLongSupporter);
  console.assert(longSupporters.length === 6, 'Should have long supporters', longSupporters.length);

  const wynnie = data.find(user => user.username === 'wsanderc');
  console.assert(wynnie && wynnie.isLongSupporter === true,
    'Should be a long supporter - Wynnie', wynnie);

  const bancroft = data.find(user => user.username === 'bsamter6');
  console.assert(bancroft && bancroft.isLongSupporter === false,
    'Should not be a long supporter - Bancroft', bancroft);
};
