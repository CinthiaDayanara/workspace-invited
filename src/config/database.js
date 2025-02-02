const { Sequelize } = require("sequelize");

require("dotenv").config();

if (!process.env.DATABASE_URL) {
  console.error("❌ ERROR: DATABASE_URL no está definida en .env");
  process.exit(1);
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false,
});

module.exports = sequelize;
