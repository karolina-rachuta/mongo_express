import mongoose from 'mongoose';

import { PAGE_SIZE } from '../constants/db';
import { getDate } from '../utils/date';
import { Employee } from './staff';

const orderSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Date,
  },
  location: {
    required: true,
    type: String,
  },
  paidIn: {
    required: true,
    type: String,
    enum: ['cash', 'card'],
  },
  staffId: {
    required: true,
    type: mongoose.Schema.ObjectId,
    ref: Employee,
  },
  products: [{
    productId: mongoose.Schema.ObjectId,
    name: {
      required: true,
      type: String,
    },
    amount: {
      required: true,
      type: Number
    },
    unitPrice: {
      required: true,
      type: Number
    }
  }],
  total: {
    required: true,
    type: Number,
    min: 0.01,
  },
});

export const Order = mongoose.model('Order', orderSchema);

export const addOrder = async (order) => {
  const orderInstance = new Order(order);
  const result = await orderInstance.save();
  return result._id;
};

export const deleteOrder = async (orderId) => {
  const result = await Order.deleteOne({
    _id: orderId,
  }).exec();

  return result.deletedCount;
};

export const getOrders = async (
  orderId,
  { dateFrom, dateTo, page = 0 } = {}
) => {
  const query = {};

  if (orderId !== 'all') {
    query._id = orderId;
  }

  if (dateFrom || dateTo) {
    query.$and = [];

    if (dateFrom) {
      query.$and.push({
        date: {
          $gte: getDate(dateFrom),
        },
      });
    }

    if (dateTo) {
      query.$and.push({
        date: {
          $lte: getDate(dateTo),
        },
      });
    }
  }

  return Order
    .find(query)
    .limit(PAGE_SIZE)
    .skip(Number(page) * PAGE_SIZE)
    .exec();
};

export const updateOrder = async (orderData) => {
  const dataToUpdate = { ...orderData };
  delete dataToUpdate._id; // Delete ID before update

  const result = await Order.updateOne(
    {
      _id: orderData._id,
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
