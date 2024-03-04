import MongoClient from 'mongodb';

import { connectToMongoose, dropCollection } from './connect';

export const ordersCol = 'orders';
export const productsCol = 'products';

const ObjectID = MongoClient.ObjectID;

const products = [{
  _id: new ObjectID('123123123123123123123123'),
  name: 'Mocha',
  brand: 'Segafredo',
  available: 203,
  lastOrderDate: new Date(),
  unitPrice: 11.32,
  supplierName: 'EuroKawexpol',
  expirationDate: new Date(),
  categories: ['coffee']
}, {
  _id: new ObjectID('456456456456456456456456'),
  name: 'Ceramic drip white',
  brand: 'Hario',
  available: 76,
  lastOrderDate: new Date(),
  unitPrice: 100.45,
  supplierName: 'EuroKawexpol',
  expirationDate: new Date(),
  categories: ['equipment']
}, {
  _id: new ObjectID('789789789789789789789789'),
  name: 'Margo',
  brand: 'Arcaffe',
  available: 11,
  lastOrderDate: new Date(),
  unitPrice: 33.54,
  supplierName: 'EuroKawexpol',
  expirationDate: new Date(),
  categories: ['coffee']
}, {
  _id: new ObjectID('987987987987987987987987'),
  name: 'Haze Mug',
  brand: 'Aoomi',
  available: 28,
  lastOrderDate: new Date(),
  unitPrice: 65.34,
  supplierName: 'EuroKawexpol',
  expirationDate: new Date(),
  categories: ['accessories', 'premium']
}];

const orders = [{
  _id: new ObjectID('321321321321321321321321'),
  date: new Date(),
  location: 'Table 8',
  paidIn: 'cash',
  staffId: new ObjectID('111111111111111111111111'),
  products: [{
    productId: products[0]._id,
    name: products[0].name,
    amount: 2,
    unitPrice: products[0].unitPrice
  }],
  total: products[0].unitPrice * 2
}, {
  _id: new ObjectID('654654654654654654654654'),
  date: new Date(),
  location: 'Table 2',
  paidIn: 'cash',
  staffId: new ObjectID('111111111111111111111111'),
  products: [{
    productId: products[1]._id,
    name: products[1].name,
    amount: 3,
    unitPrice: products[1].unitPrice
  }, {
    productId: products[3]._id,
    name: products[3].name,
    amount: 1,
    unitPrice: products[3].unitPrice
  }],
  total: products[1].unitPrice * 3 + products[3].unitPrice
}, {
  _id: new ObjectID('987987987987987987987987'),
  date: new Date(),
  location: 'Table 5',
  paidIn: 'cash',
  staffId: new ObjectID('111111111111111111111111'),
  products: [{
    productId: products[2]._id,
    name: products[2].name,
    amount: 5,
    unitPrice: products[2].unitPrice
  }],
  total: products[2].unitPrice * 5
}];

(async function () {
  try {
    const db = await connectToMongoose();

    await dropCollection(db, ordersCol);
    await dropCollection(db, productsCol);

    await db.collection(ordersCol).insertMany(orders);
    await db.collection(productsCol).insertMany(products);
  } catch (err) {
    console.log(err);
  }

  return process.exit(0);
})();
