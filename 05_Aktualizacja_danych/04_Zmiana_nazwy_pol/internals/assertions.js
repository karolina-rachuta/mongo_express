export const runAssertions = async collection => {
  const entries = await collection.find({}).toArray();
  const randomEntryIndex = Math.round(Math.random() * entries.length - 1);

  const randomEntry = entries[randomEntryIndex];

  console.assert(randomEntry, 'Entry should be defined', randomEntry);
  console.assert(randomEntry.company, 'Company should be defined', randomEntry);
  console.assert(randomEntry.name, 'Name should be defined', randomEntry);
  console.assert(randomEntry.icdCode, 'IcdCode should be defined', randomEntry);
  console.assert(randomEntry.icdDesc, 'IcdDesc should be defined', randomEntry);
  console.assert(randomEntry.icdProc, 'IcdProc should be defined', randomEntry);
};
