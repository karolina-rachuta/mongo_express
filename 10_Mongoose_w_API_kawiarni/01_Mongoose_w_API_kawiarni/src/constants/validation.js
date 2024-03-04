import Joi from '@hapi/joi';

export const idSchema = Joi.string().length(24).error(new Error("Not a valid ID"));

export default {
  idSchema,
};
