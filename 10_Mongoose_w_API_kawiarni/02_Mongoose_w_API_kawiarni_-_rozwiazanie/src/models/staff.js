import mongoose from 'mongoose';

import { PAGE_SIZE } from '../constants/db';

const employeeSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    startedAt: {
      required: true,
      type: Date,
    },
    rating: {
      required: true,
      type: Number,
      min: 0,
      max: 10,
    },
    position: {
      required: true,
      type: [String],
      enum: ['waiter', 'waitress', 'barista', 'cleaning', 'temp'],
    },
    monthlySalary: {
      required: true,
      type: Number,
      min: 2000,
    },
  },
  { strict: 'throw' }
);

export const Employee = mongoose.model('Employee', employeeSchema, 'staff');

export const addEmployee = async (employee) => {
  const employeeInstance = new Employee(employee);
  await employeeInstance.save();
  return employeeInstance._id;
};

export const deleteEmployee = async (employeeId) => {
  const result = await Employee.deleteOne({
    _id: employeeId,
  }).exec();

  return result.deletedCount;
};

export const getEmployees = async (
  employeeId,
  { ratingAbove, ratingBelow, page = 0, position } = {}
) => {
  const query = {};

  if (employeeId !== 'all') {
    query._id = employeeId;
  }

  if (ratingAbove || ratingBelow) {
    query.$and = [];

    if (ratingAbove) {
      query.$and.push({
        rating: {
          $gte: Number(ratingAbove),
        },
      });
    }

    if (ratingBelow) {
      query.$and.push({
        rating: {
          $lte: Number(ratingBelow),
        },
      });
    }
  }

  if (position) {
    query.position = position;
  }

  return Employee.find(query)
    .limit(PAGE_SIZE)
    .skip(Number(page) * PAGE_SIZE)
    .exec();
};

export const updateEmployee = async (employeeData) => {
  const dataToUpdate = { ...employeeData };
  delete dataToUpdate._id; // Delete ID before update

  const result = await Employee.updateOne(
    {
      _id: employeeData._id,
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
