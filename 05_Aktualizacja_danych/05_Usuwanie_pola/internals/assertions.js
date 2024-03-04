export const runAssertions = async collection => {
  const entries = await collection.find({}).toArray();
  const randomEntryIndex = Math.round(Math.random() * entries.length - 1);

  const randomEntry = entries[randomEntryIndex];

  console.assert(randomEntry, 'Entry should be defined', randomEntry);
  console.assert(!randomEntry.firstName, 'Should not have firstName', randomEntry);
  console.assert(!randomEntry.lastName, 'Should not have lastName', randomEntry);
};
