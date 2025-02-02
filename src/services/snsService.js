const sns = require("../config/snsConfig");

const sendInviteNotification = async (email, workspaceId) => {
  const params = {
    Message: `Has sido invitado al espacio de trabajo ID: ${workspaceId}`,
    Subject: "Invitación a Workspace",
    TopicArn: process.env.SNS_TOPIC_ARN
  };

  try {
    await sns.publish(params).promise();
    console.log(`📩 Notificación enviada a SNS para ${email}`);
  } catch (error) {
    console.error("❌ Error enviando notificación SNS:", error);
  }
};

module.exports = { sendInviteNotification };
