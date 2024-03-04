import { connectToMongoose } from './connect';

export const collectionName = 'tickets';

const data = [{
  eventName: 'Jaga Jazzist',
  price: 135.46,
  amount: 10,
  date: new Date('2021-07-04T07:18:18Z')
}, {
  eventName: 'Jamie Cullum Live',
  price: 427.09,
  amount: 9,
  date: new Date('2021-06-14T06:52:49Z')
}, {
  eventName: 'Lenny Kravitz Here & Love',
  price: 69.44,
  amount: 10,
  date: new Date('2020-08-30T14:54:58Z')
}, {
  eventName: 'Uniatowski The Best Of',
  price: 147.14,
  amount: 1,
  date: new Date('2021-06-29T01:48:50Z')
}, {
  eventName: 'Queen Symfonicznie',
  price: 209.63,
  amount: 4,
  date: new Date('2020-12-08T08:47:42Z')
}, {
  eventName: 'King Dude European Tour',
  price: 156.88,
  amount: 4,
  date: new Date('2021-04-19T21:47:21Z')
}, {
  eventName: 'Kings Of Leon',
  price: 278.8,
  amount: 1,
  date: new Date('2021-06-09T11:44:04Z')
}, {
  eventName: 'Bon Iver',
  price: 121.63,
  amount: 9,
  date: new Date('2021-01-19T06:33:02Z')
}, {
  eventName: 'KISS: End of the Road',
  price: 344.62,
  amount: 8,
  date: new Date('2021-04-10T22:10:16Z')
}, {
  eventName: 'The Doors - Alive',
  price: 341.68,
  amount: 5,
  date: new Date('2020-12-22T03:45:58Z')
}];

(async function () {
  const db = await connectToMongoose(collectionName);
  await db.collection(collectionName).insertMany(data);

  return process.exit(0);
})();
