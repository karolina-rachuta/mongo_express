export const runAssertions = async (data = []) => {
  const oldImageDataDocs = data.filter(doc => doc.hasOldImgURL);
  console.assert(oldImageDataDocs.length === 8,
    'Should have 8 documents with old images', oldImageDataDocs.length);

  const cleanedUpEntry = data.find(entry => entry._id === 'findme') || {};
  console.assert(cleanedUpEntry.slogan === 'enhance rich channels',
    'Should have cleaned up slogan', cleanedUpEntry);
  console.assert(cleanedUpEntry.splitTitle && cleanedUpEntry.splitTitle.length === 3,
    'Should have splitTitle property', cleanedUpEntry);
  console.assert(cleanedUpEntry.splitTitle[0] === 'Down-sized' && cleanedUpEntry.splitTitle[2] === 'capacity',
    'Should be properly split', cleanedUpEntry);
};
