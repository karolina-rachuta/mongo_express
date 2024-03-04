export const runAssertions = async (data = []) => {
  console.assert(data.length === 10, 'Should return 10 results', data.length);
  console.assert(data[0] && data[0].plantName === 'Tropical Brackenfern',
    'Should have Tropical Brackenfern as top element', data);
  console.assert(data[9] && data[9].plantName === 'Thorne\'s Sedge',
    'Should have Thorne\'s Sedge as the last element', data);
};
