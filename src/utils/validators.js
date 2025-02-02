const Joi = require("joi");

const inviteSchema = Joi.object({
  workspace_id: Joi.number().integer().required(),
  email: Joi.string().email().required()
});

const validateInvite = (data) => {
  const { error } = inviteSchema.validate(data, { abortEarly: false });
  if (error) throw new Error(error.details.map(err => err.message).join(", "));
};

module.exports = { validateInvite };
