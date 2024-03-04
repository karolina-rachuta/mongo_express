export const runAssertions = async (unsetData = [], projectData = []) => {
  console.assert(unsetData.length === 15, 'Should have 15 elements', unsetData.length);
  console.assert(unsetData[0] && unsetData[0].meanRating === 4.8, 'Should have mean rating of 4.8', unsetData[0]);
  console.assert(unsetData[0] && unsetData[0].meanWatchTime === 84.7, 'Should have mean watch time of 84.7', unsetData[0]);
  console.assert(Object.keys(unsetData[0]).length === 6, 'Should have keys', unsetData[0]);

  console.assert(projectData.length === 15, 'Should have 15 elements', projectData.length);
  console.assert(projectData[0] && projectData[0].meanRating === 4.8, 'Should have mean rating of 4.8', projectData[0]);
  console.assert(projectData[0] && projectData[0].meanWatchTime === 84.7, 'Should have mean watch time of 84.7', projectData[0]);
  console.assert(Object.keys(projectData[0]).length === 6, 'Should have 3 keys', projectData[0]);
};
