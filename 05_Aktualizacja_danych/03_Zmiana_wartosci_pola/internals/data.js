import MongoClient from 'mongodb';

export const data = [{
  shop: 'Cropp',
  product: 'Jeans',
  price: '199 zł',
  quantity: 50,
  size: 'M',
  color: 'Yellow'
}, {
  shop: 'Zara',
  product: 'Jacket',
  price: '199 zł',
  quantity: 10,
  size: 'M',
  color: 'Green'
}, {
  shop: 'Sinsay',
  product: 'Jacket',
  price: '39 zł',
  quantity: 10,
  size: 'XL',
  color: 'Brown'
}, {
  shop: 'Sinsay',
  product: 'Shorts',
  price: '149 zł',
  quantity: 100,
  size: 'M',
  color: 'Black'
}, {
  shop: 'Reserved',
  product: 'Sweater',
  price: '99 zł',
  quantity: 25,
  size: 'XL',
  color: 'Red'
}, {
  shop: 'Adidas',
  product: 'Jacket',
  price: '59 zł',
  quantity: 40,
  size: 'XS',
  color: 'Black'
}, {
  shop: 'House',
  product: 'Shirt',
  price: '39 zł',
  quantity: 15,
  size: 'XL',
  color: 'Orange'
}, {
  shop: 'Sinsay',
  product: 'Skirt',
  price: '209 zł',
  quantity: 10,
  size: 'XXL',
  color: 'Black'
}, {
  shop: 'Mango',
  product: 'Blouse',
  price: '39 zł',
  quantity: 60,
  size: 'M',
  color: 'Blue'
}, {
  shop: 'Reserved',
  product: 'Blouse',
  price: '149 zł',
  quantity: 80,
  size: 'One Size',
  color: 'Brown'
}, {
  shop: 'Cropp',
  product: 'Blazer',
  price: '99 zł',
  quantity: 75,
  size: 'XXL',
  color: 'Orange'
}, {
  shop: 'Mohito',
  product: 'Jeans',
  price: '99 zł',
  quantity: 20,
  size: 'XS',
  color: 'Green'
}, {
  shop: 'Mango',
  product: 'Sweater',
  price: '89 zł',
  quantity: 25,
  size: 'S',
  color: 'Blue'
}, {
  shop: 'Cropp',
  product: 'Skirt',
  price: '69 zł',
  quantity: 70,
  size: 'XXL',
  color: 'Blue'
}, {
  shop: 'Cropp',
  product: 'Jeans',
  price: '99 zł',
  quantity: 70,
  size: 'XS',
  color: 'White'
}, {
  shop: 'Cropp',
  product: 'Skirt',
  price: '109 zł',
  quantity: 10,
  size: 'One Size',
  color: 'Black'
}, {
  shop: 'Reserved',
  product: 'Skirt',
  price: '99 zł',
  quantity: 60,
  size: 'XL',
  color: 'Orange'
}, {
  shop: 'Mango',
  product: 'Jeans',
  price: '149 zł',
  quantity: 25,
  size: 'XL',
  color: 'Blue'
}, {
  shop: 'Sinsay',
  product: 'Jeans',
  price: '229 zł',
  quantity: 100,
  size: 'S',
  color: 'Blue'
}, {
  shop: 'Mango',
  product: 'Sweater',
  price: '99 zł',
  quantity: 10,
  size: 'XS',
  color: 'Red'
}, {
  shop: 'Adidas',
  product: 'Jacket',
  price: '99 zł',
  quantity: 70,
  size: 'XXL',
  color: 'Blue'
}, {
  shop: 'Mohito',
  product: 'Shirt',
  price: '39 zł',
  quantity: 60,
  size: 'One Size',
  color: 'Pink'
}, {
  shop: 'Tommy Hilfiger',
  product: 'Blouse',
  price: '149 zł',
  quantity: 15,
  size: 'XS',
  color: 'Yellow'
}, {
  shop: 'Reserved',
  product: 'Skirt',
  price: '109 zł',
  quantity: 50,
  size: 'XL',
  color: 'Green'
}, {
  shop: 'Zara',
  product: 'Shirt',
  price: '69 zł',
  quantity: 60,
  size: 'L',
  color: 'Pink'
}, {
  shop: 'Zara',
  product: 'Dress',
  price: '199 zł',
  quantity: 10,
  size: 'M',
  color: 'Pink'
}, {
  shop: 'Sinsay',
  product: 'Trousers',
  price: '59 zł',
  quantity: 10,
  size: 'One Size',
  color: 'Green'
}, {
  shop: 'Zara',
  product: 'Shorts',
  price: '39 zł',
  quantity: 50,
  size: 'S',
  color: 'Blue'
}, {
  shop: 'House',
  product: 'Trousers',
  price: '59 zł',
  quantity: 100,
  size: 'XXL',
  color: 'Black'
}, {
  shop: 'Tommy Hilfiger',
  product: 'Blouse',
  price: '149 zł',
  quantity: 40,
  size: 'S',
  color: 'Orange'
}, {
  shop: 'Zara',
  product: 'Jacket',
  price: '59 zł',
  quantity: 60,
  size: 'S',
  color: 'Yellow'
}, {
  shop: 'Zara',
  product: 'Skirt',
  price: '59 zł',
  quantity: 75,
  size: 'S',
  color: 'Violet'
}, {
  shop: 'Cropp',
  product: 'Shirt',
  price: '209 zł',
  quantity: 75,
  size: 'M',
  color: 'Pink'
}, {
  shop: 'Zara',
  product: 'Jeans',
  price: '109 zł',
  quantity: 20,
  size: 'One Size',
  color: 'Black'
}, {
  shop: 'Adidas',
  product: 'Sweater',
  price: '199 zł',
  quantity: 75,
  size: 'M',
  color: 'Brown'
}, {
  shop: 'Top Secet',
  product: 'Jeans',
  price: '109 zł',
  quantity: 75,
  size: 'L',
  color: 'Black'
}, {
  shop: 'Mango',
  product: 'Shirt',
  price: '99 zł',
  quantity: 40,
  size: 'M',
  color: 'Violet'
}, {
  shop: 'Mango',
  product: 'Trousers',
  price: '199 zł',
  quantity: 50,
  size: 'One Size',
  color: 'Beige'
}, {
  shop: 'Reserved',
  product: 'Trousers',
  price: '149 zł',
  quantity: 40,
  size: 'S',
  color: 'Pink'
}, {
  shop: 'Reserved',
  product: 'Dress',
  price: '209 zł',
  quantity: 100,
  size: 'M',
  color: 'Black'
}, {
  shop: 'Sinsay',
  product: 'Dress',
  price: '99 zł',
  quantity: 10,
  size: 'XS',
  color: 'Beige'
}, {
  shop: 'Mohito',
  product: 'Skirt',
  price: '229 zł',
  quantity: 75,
  size: 'M',
  color: 'Blue'
}, {
  shop: 'Sinsay',
  product: 'Skirt',
  price: '109 zł',
  quantity: 15,
  size: 'XS',
  color: 'Red'
}, {
  shop: 'Top Secet',
  product: 'Shorts',
  price: '109 zł',
  quantity: 15,
  size: 'XS',
  color: 'Red'
}, {
  shop: 'Sinsay',
  product: 'Jeans',
  price: '99 zł',
  quantity: 15,
  size: 'XS',
  color: 'Yellow'
}, {
  shop: 'Adidas',
  product: 'Blouse',
  price: '229 zł',
  quantity: 50,
  size: 'One Size',
  color: 'Green'
}, {
  shop: 'Reserved',
  product: 'Sweater',
  price: '89 zł',
  quantity: 20,
  size: 'S',
  color: 'Yellow'
}, {
  shop: 'Zara',
  product: 'Jeans',
  price: '39 zł',
  quantity: 75,
  size: 'XL',
  color: 'Violet'
}, {
  shop: 'Zara',
  product: 'Shirt',
  price: '89 zł',
  quantity: 20,
  size: 'XL',
  color: 'Yellow'
}, {
  shop: 'Mohito',
  product: 'Trousers',
  price: '89 zł',
  quantity: 25,
  size: 'XL',
  color: 'Beige'
}, {
  shop: 'Mohito',
  product: 'Sweater',
  price: '109 zł',
  quantity: 25,
  size: 'One Size',
  color: 'Green'
}, {
  shop: 'Zara',
  product: 'Trousers',
  price: '59 zł',
  quantity: 80,
  size: 'XS',
  color: 'Black'
}, {
  shop: 'House',
  product: 'Shorts',
  price: '89 zł',
  quantity: 15,
  size: 'L',
  color: 'Blue'
}, {
  shop: 'Tommy Hilfiger',
  product: 'Trousers',
  price: '109 zł',
  quantity: 80,
  size: 'One Size',
  color: 'White'
}, {
  shop: 'Zara',
  product: 'Dress',
  price: '229 zł',
  quantity: 100,
  size: 'XXL',
  color: 'Black'
}, {
  shop: 'Top Secet',
  product: 'Trousers',
  price: '69 zł',
  quantity: 80,
  size: 'One Size',
  color: 'Beige'
}, {
  shop: 'Mango',
  product: 'Shorts',
  price: '59 zł',
  quantity: 40,
  size: 'One Size',
  color: 'Red'
}, {
  shop: 'Tommy Hilfiger',
  product: 'Shirt',
  price: '69 zł',
  quantity: 15,
  size: 'M',
  color: 'Green'
}, {
  shop: 'House',
  product: 'Blouse',
  price: '149 zł',
  quantity: 20,
  size: 'S',
  color: 'Orange'
}, {
  shop: 'Reserved',
  product: 'Sweater',
  price: '149 zł',
  quantity: 70,
  size: 'XXL',
  color: 'Pink'
}, {
  shop: 'Mango',
  product: 'Skirt',
  price: '229 zł',
  quantity: 50,
  size: 'XXL',
  color: 'Violet'
}, {
  shop: 'Cropp',
  product: 'Sweater',
  price: '69 zł',
  quantity: 20,
  size: 'One Size',
  color: 'Black'
}, {
  shop: 'Adidas',
  product: 'Shirt',
  price: '99 zł',
  quantity: 15,
  size: 'S',
  color: 'Brown'
}, {
  shop: 'Mango',
  product: 'Skirt',
  price: '99 zł',
  quantity: 60,
  size: 'XS',
  color: 'Black'
}, {
  shop: 'Mohito',
  product: 'Jacket',
  price: '199 zł',
  quantity: 60,
  size: 'One Size',
  color: 'Violet'
}, {
  shop: 'Tommy Hilfiger',
  product: 'Jeans',
  price: '209 zł',
  quantity: 80,
  size: 'XL',
  color: 'White'
}, {
  shop: 'Sinsay',
  product: 'Shorts',
  price: '99 zł',
  quantity: 10,
  size: 'M',
  color: 'Blue'
}, {
  shop: 'Zara',
  product: 'Trousers',
  price: '39 zł',
  quantity: 80,
  size: 'S',
  color: 'Pink'
}, {
  shop: 'Sinsay',
  product: 'Sweater',
  price: '199 zł',
  quantity: 20,
  size: 'XL',
  color: 'Black'
}, {
  shop: 'Zara',
  product: 'Shirt',
  price: '209 zł',
  quantity: 20,
  size: 'XXL',
  color: 'Orange'
}, {
  shop: 'Tommy Hilfiger',
  product: 'Blouse',
  price: '89 zł',
  quantity: 70,
  size: 'One Size',
  color: 'Red'
}, {
  shop: 'Mango',
  product: 'Jacket',
  price: '99 zł',
  quantity: 15,
  size: 'S',
  color: 'Pink'
}, {
  shop: 'Tommy Hilfiger',
  product: 'Blouse',
  price: '149 zł',
  quantity: 25,
  size: 'M',
  color: 'Black'
}, {
  shop: 'House',
  product: 'Jacket',
  price: '39 zł',
  quantity: 75,
  size: 'L',
  color: 'Red'
}, {
  shop: 'Sinsay',
  product: 'Skirt',
  price: '229 zł',
  quantity: 80,
  size: 'XXL',
  color: 'White'
}, {
  shop: 'House',
  product: 'Trousers',
  price: '59 zł',
  quantity: 70,
  size: 'S',
  color: 'Pink'
}, {
  shop: 'House',
  product: 'Shorts',
  price: '89 zł',
  quantity: 25,
  size: 'XXL',
  color: 'Pink'
}, {
  shop: 'Adidas',
  product: 'Trousers',
  price: '199 zł',
  quantity: 50,
  size: 'XXL',
  color: 'Yellow'
}, {
  shop: 'Sinsay',
  product: 'Shorts',
  price: '109 zł',
  quantity: 20,
  size: 'XXL',
  color: 'Black'
}, {
  shop: 'Top Secet',
  product: 'Trousers',
  price: '99 zł',
  quantity: 80,
  size: 'XS',
  color: 'Yellow'
}, {
  shop: 'Adidas',
  product: 'Jeans',
  price: '39 zł',
  quantity: 20,
  size: 'L',
  color: 'Brown'
}, {
  shop: 'Reserved',
  product: 'Dress',
  price: '199 zł',
  quantity: 40,
  size: 'S',
  color: 'Red'
}, {
  shop: 'Reserved',
  product: 'Sweater',
  price: '39 zł',
  quantity: 25,
  size: 'M',
  color: 'Orange'
}, {
  shop: 'Adidas',
  product: 'Dress',
  price: '199 zł',
  quantity: 50,
  size: 'One Size',
  color: 'Pink'
}, {
  shop: 'Mohito',
  product: 'Jeans',
  price: '59 zł',
  quantity: 60,
  size: 'S',
  color: 'Green'
}, {
  shop: 'House',
  product: 'Shirt',
  price: '209 zł',
  quantity: 12,
  size: 'One Size',
  color: 'White'
}, {
  shop: 'Top Secet',
  product: 'Jacket',
  price: '99 zł',
  quantity: 70,
  size: 'XXL',
  color: 'Red'
}, {
  shop: 'Cropp',
  product: 'Blouse',
  price: '109 zł',
  quantity: 70,
  size: 'One Size',
  color: 'Violet'
}, {
  shop: 'Cropp',
  product: 'Jeans',
  price: '39 zł',
  quantity: 40,
  size: 'One Size',
  color: 'White'
}, {
  shop: 'Mango',
  product: 'Sweater',
  price: '149 zł',
  quantity: 60,
  size: 'One Size',
  color: 'Red'
}, {
  shop: 'Mohito',
  product: 'Blouse',
  price: '199 zł',
  quantity: 20,
  size: 'One Size',
  color: 'Orange'
}, {
  shop: 'Sinsay',
  product: 'Sweater',
  price: '39 zł',
  quantity: 25,
  size: 'XXL',
  color: 'Black'
}, {
  shop: 'Sinsay',
  product: 'Jacket',
  price: '59 zł',
  quantity: 20,
  size: 'XXL',
  color: 'Orange'
}, {
  shop: 'Mango',
  product: 'Dress',
  price: '89 zł',
  quantity: 15,
  size: 'XXL',
  color: 'Yellow'
}, {
  shop: 'Top Secet',
  product: 'Jeans',
  price: '69 zł',
  quantity: 50,
  size: 'M',
  color: 'Yellow'
}, {
  shop: 'House',
  product: 'Jeans',
  price: '69 zł',
  quantity: 80,
  size: 'XXL',
  color: 'Green'
}, {
  shop: 'Adidas',
  product: 'Shirt',
  price: '109 zł',
  quantity: 100,
  size: 'XL',
  color: 'Red'
}, {
  shop: 'Mohito',
  product: 'Jacket',
  price: '69 zł',
  quantity: 60,
  size: 'S',
  color: 'Green'
}, {
  shop: 'Sinsay',
  product: 'Dress',
  price: '209 zł',
  quantity: 60,
  size: 'XXL',
  color: 'Black'
}];
