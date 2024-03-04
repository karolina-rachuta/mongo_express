import mongoose from 'mongoose';

import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from '../models/staff';

import { MISSING_DATA, NOT_FOUND, VALIDATION_ERROR } from '../constants/error';

export default class Staff {
  async addEmployee(employeeData) {
    if (!employeeData) {
      throw new Error(MISSING_DATA);
    }

    try {
      return await addEmployee(employeeData);
    } catch (err) {
      if (err.name === 'ValidationError') {
        const error = new Error(VALIDATION_ERROR);
        error.reason = err.message;
        throw error;
      }

      throw err;
    }
  }

  async deleteEmployee(employeeId) {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(employeeId);

    if (!isValidObjectId) {
      const error = new Error(VALIDATION_ERROR);
      error.reason = `Not a valid ID: ${employeeId}`;
      throw error;
    }

    const deletedCount = await deleteEmployee(employeeId);
    if (deletedCount === 0) {
      throw new Error(NOT_FOUND);
    }

    return true;
  }

  async getEmployees(employeeId, additionalParams) {
    return getEmployees(employeeId, additionalParams);
  }

  async updateEmployee(employeeData) {
    // Throw when there is nothing to update
    if (!employeeData || Object.keys(employeeData).length <= 1) {
      throw new Error(MISSING_DATA);
    }

    try {
      return await updateEmployee(employeeData);
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
