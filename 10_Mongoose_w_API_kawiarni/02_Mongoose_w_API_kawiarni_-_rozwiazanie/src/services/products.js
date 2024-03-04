import mongoose from 'mongoose';

import { MISSING_DATA, NOT_FOUND, VALIDATION_ERROR } from '../constants/error';
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../models/products';

export default class Products {
  async addProduct(productData) {
    if (!productData) {
      throw new Error(MISSING_DATA);
    }

    try {
      return await addProduct(productData);
    } catch (err) {
      if (err.name === 'ValidationError') {
        const error = new Error(VALIDATION_ERROR);
        error.reason = err.message;
        throw error;
      }

      throw err;
    }
  }

  async deleteProduct(productId) {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if (!isValidObjectId) {
      const error = new Error(VALIDATION_ERROR);
      error.reason = `Not a valid ID: ${productId}`;
      throw error;
    }

    const deletedCount = await deleteProduct(productId);
    if (deletedCount === 0) {
      throw new Error(NOT_FOUND);
    }

    return true;
  }

  async getProducts(productId, additionalParams) {
    return getProducts(productId, additionalParams);
  }

  async updateProduct(productData) {
    // Throw when there is nothing to update
    if (!productData || Object.keys(productData).length <= 1) {
      throw new Error(MISSING_DATA);
    }

    try {
      return await updateProduct(productData);
    } catch (err) {
      if (err.name === 'ValidationError') {
        const error = new Error(VALIDATION_ERROR);
        error.reason = err.message;
        throw error;
      }

      throw err;
    }
  }
}
