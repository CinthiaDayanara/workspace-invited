const { createInvite } = require("../services/inviteService");
const { validateInvite } = require("../utils/validators");

exports.inviteUser = async (req, res) => {
  try {
    validateInvite(req.body);
    const newInvite = await createInvite(req.body);
    res.status(201).json({ message: "Invitación creada", invite: newInvite });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
