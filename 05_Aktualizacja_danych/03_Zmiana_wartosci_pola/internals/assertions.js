export const runAssertions = async collection => {
  const shirt = (await collection.find({
    shop: 'House',
    product: 'Shirt',
    size: 'One Size',
    color: 'White'
  }).toArray())[0] || {};

  console.assert(shirt.quantity === 50, 'Should have 50 shirts', shirt);
  console.assert(shirt.price === '209 zł', 'Should not modify the shirt price', shirt);

  const blouse = (await collection.find({
    shop: 'Mohito',
    product: 'Blouse',
    size: 'XL',
    color: 'Violet'
  }).toArray())[0] || {};

  console.assert(blouse.quantity === 20, 'Should have 20 blouses', blouse);
  console.assert(blouse.price === '199 zł', 'Should have proper blouse price', blouse);
};
