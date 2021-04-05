const Joi = require('joi');

const userSchema = Joi.object({
  _id: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().integer().required,
});

const joiOptions = {};
 
module.exports = (obj) => Joi.validate(obj, userSchema, joiOptions);
