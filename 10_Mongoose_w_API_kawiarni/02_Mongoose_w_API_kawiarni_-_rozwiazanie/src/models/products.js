import mongoose from 'mongoose';

import { PAGE_SIZE } from '../constants/db';

const productSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    brand: {
      required: true,
      type: String,
    },
    available: {
      required: true,
      type: Number,
    },
    lastOrderDate: {
      required: true,
      type: Date,
    },
    unitPrice: {
      required: true,
      type: Number,
    },
    supplierName: {
      required: true,
      type: String,
    },
    expirationDate: {
      required: true,
      type: Date,
    },
    categories: {
      type: [String],
      enum: ['coffee', 'food', 'accessories', 'equipment', 'premium'],
    },
  },
  { strict: 'throw' }
);
export const Product = mongoose.model('Product', productSchema);

export const addProduct = async (productData) => {
  const productInstance = new Product(productData);
  const result = await productInstance.save();
  return result._id;
};

export const deleteProduct = async (productId) => {
  const result = await Product.deleteOne({
    _id: productId,
  }).exec();
  return result.deletedCount;
};

export const getProducts = (
  productIds,
  { amountAtLeast, brand, categories, page = 0 } = {}
) => {
  const query = {};

  if (productIds !== 'all') {
    query._id = { $in: productIds };
  }

  if (amountAtLeast) {
    query.available = { $gte: Number(amountAtLeast) };
  }

  if (brand) {
    query.brand = brand;
  }

  // Uses "and"!
  if (categories) {
    query.categories = { $all: categories.split(',') };
  }

  return Product.find(query)
    .limit(PAGE_SIZE)
    .skip(Number(page) * PAGE_SIZE)
    .exec();
};

export const updateProduct = async (productData) => {
  const dataToUpdate = { ...productData };
  delete dataToUpdate._id; // Delete ID before update

  const result = await Product.updateOne(
    {
      _id: productData._id,
    },
    {
      $set: dataToUpdate,
    },
    {
      upsert: false,
    }
  ).exec();

  return result.nModified;
};
