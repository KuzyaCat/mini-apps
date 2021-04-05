const Joi = require('joi');

const logsSchema = Joi.object({
  event: Joi.string().required(),
});

const joiOptions = {};
 
module.exports = (obj) => Joi.validate(obj, logsSchema, joiOptions);
