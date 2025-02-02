const Invite = require("../models/Invite");
const { sendInviteNotification } = require("./snsService");

const createInvite = async (data) => {
  const invite = await Invite.create(data);
  await sendInviteNotification(data.email, data.workspace_id);
  return invite;
};

module.exports = { createInvite };
