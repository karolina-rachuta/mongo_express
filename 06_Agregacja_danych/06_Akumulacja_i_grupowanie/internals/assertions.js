export const runAssertions = async (data = []) => {
  console.assert(data.length === 29, 'Should find total services', data.length);

  const amazonEntry = data.find(entry => entry.service === 'Amazon.com') || {};
  console.assert(amazonEntry.totalAmount === 23.25,
    'Should have proper amount for the Amazon', amazonEntry)

  const targetEntry = data.find(entry => entry.service === 'Target') || {};
  console.assert(targetEntry.totalAmount === 501.44,
    'Should have proper amount for Target', targetEntry);
};
