export const runAssertions = async (model) => {
  console.assert(model, 'Should be a defined model', model);

  const order = await model.findById('654654654654654654654654').exec();
  console.assert(order, 'Should find an order', order);

  console.assert(order.getRelatedProducts, 'Should have "getRelatedProducts" defined',
    order.getRelatedProducts);

  const relatedProducts = await order.getRelatedProducts();
  console.assert(relatedProducts, 'Should find related products', relatedProducts);
  console.assert(relatedProducts && relatedProducts.length === 2,
    'Should find 2 related products', relatedProducts);

  const secondProduct = relatedProducts.find(product => product.name === 'Ceramic drip white');
  console.assert(secondProduct, 'Should find second product - drip',
    secondProduct);
  console.assert(secondProduct && secondProduct.available === 76,
    'Should have proper property from the product', secondProduct);
};
