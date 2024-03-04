import mongoose from 'mongoose';

import { addOrder, deleteOrder, getOrders, updateOrder } from '../models/orders';
import { MISSING_DATA, NOT_FOUND, PEER_ERROR, VALIDATION_ERROR, } from '../constants/error';
import { getEmployees } from '../models/staff';
import { getProducts } from '../models/products';

export default class Orders {
  static async _checkIfEmployeeExists(employeeId) {
    const existingEmployee = await getEmployees(employeeId);
    if (!existingEmployee) {
      const error = new Error(PEER_ERROR);
      error.reason = 'Missing related employee';
      throw error;
    }
  }

  static async _checkIfProductsExist(products) {
    const productIds = products.map((product) => product.productId);
    const dbProducts = await getProducts(productIds);
    if (dbProducts.length !== productIds.length) {
      const missingIds = productIds.filter(
        (productId) =>
          dbProducts.findIndex((product) => product._id === productId) === -1
      );
      const error = new Error(PEER_ERROR);
      error.reason = `Missing following products: ${missingIds.join(', ')}`;
      throw error;
    }
  }

  async addOrder(orderData) {
    if (!orderData) {
      throw new Error(MISSING_DATA);
    }

    try {
      await Orders._checkIfEmployeeExists(orderData.staffId);
      await Orders._checkIfProductsExist(orderData.products);

      return await addOrder(orderData);
    } catch (err) {
      if (err.name === 'ValidationError') {
        const error = new Error(VALIDATION_ERROR);
        error.reason = err.message;
        throw error;
      }

      throw err;
    }
  }

  async deleteOrder(orderId) {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(orderId);

    if (!isValidObjectId) {
      const error = new Error(VALIDATION_ERROR);
      error.reason = `Not a valid ID: ${orderId}`;
      throw error;
    }

    const deletedCount = await deleteOrder(orderId);
    if (deletedCount === 0) {
      throw new Error(NOT_FOUND);
    }

    return true;
  }

  async getOrders(orderId, additionalParams) {
    return getOrders(orderId, additionalParams);
  }

  async updateOrder(orderData) {
    if (!orderData || Object.keys(orderData).length <= 1) {
      throw new Error(MISSING_DATA);
    }

    try {
      if (orderData.staffId) {
        await Orders._checkIfEmployeeExists(orderData.staffId);
      }
      if (orderData.products) {
        await Orders._checkIfProductsExist(orderData.products);
      }

      return await updateOrder(orderData);
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
