export const runAssertions = async collection => {
  const updatedStalingrad = await collection.findOne({
    name: 'The Battle Of Stalingrad'
  });

  console.assert(updatedStalingrad !== null, 'Should be defined', updatedStalingrad);
  if (updatedStalingrad) {
    console.assert(updatedStalingrad.stats.defensivePower === 1257300,
      'Should have new value of defensive power', updatedStalingrad.stats);
    console.assert(updatedStalingrad.stats.offensiveKilled === 648803,
      'Should have new value of offensive side kills', updatedStalingrad.stats);
    console.assert(updatedStalingrad.stats.defensiveWounded === 650521,
      'Should have new value of defensive wounded', updatedStalingrad.stats);
  }
};
