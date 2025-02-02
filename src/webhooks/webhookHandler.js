const axios = require("axios");

const triggerWebhook = async (webhookUrl, payload) => {
  try {
    await axios.post(webhookUrl, payload);
    console.log("📡 Webhook enviado con éxito");
  } catch (error) {
    console.error("❌ Error enviando Webhook:", error);
  }
};

module.exports = { triggerWebhook };
