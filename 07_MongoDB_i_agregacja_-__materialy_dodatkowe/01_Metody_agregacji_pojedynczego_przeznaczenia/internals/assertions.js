export const runAssertions = async (data = []) => {
  console.assert(data.length === 41, 'Should find 41 animals', data.length);
  console.assert(data[0] === 'African jacana', 'Should start with African jacana');
  console.assert(data[40] === 'Wattled crane', 'Should end with Wattled crane');
};
