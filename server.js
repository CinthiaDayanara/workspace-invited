require("dotenv").config();
const express = require("express");
const inviteRoutes = require("./src/routes/inviteRoutes");
const sequelize = require("./src/config/database");

const app = express();
app.use(express.json());

app.use("/invites", inviteRoutes);

const PORT = process.env.PORT || 5009;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Workspace Invite Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
