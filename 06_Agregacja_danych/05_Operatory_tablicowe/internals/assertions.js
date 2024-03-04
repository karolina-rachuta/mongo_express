export const runAssertions = async data => {
  console.assert(data && data.length === 15,
    'Should have 15 entries', data && data.length);

  const firstEntry = (data && data.find(user => user.email === 'hmoorerud0@nsw.gov.au')) || {};
  const allPlaces = firstEntry.allPlaces || [];
  console.assert(allPlaces.length === 15, 'Should have 15 places',
    allPlaces.length);

  const totalPlaces = firstEntry.totalPlaces;
  console.assert(totalPlaces === 15, 'Should have correct total number of places', totalPlaces);

  const placeNames = (firstEntry.placeNames || []).join(',');
  console.assert(
    placeNames === 'Sorang,Dapdap,Nyzhnya Krynka,Kanchanaburi,Pilot Butte,Likiep,Quintães,Tumbagaan,Tianjin,' +
    'Sishan,Fuerte,Sobhādero,Sandaogou,Boucinha,Tyresö',
    'Should have place names added',
    firstEntry.placeNames);
};
