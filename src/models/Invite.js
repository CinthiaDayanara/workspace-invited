const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Invite = sequelize.define("Invite", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  workspace_id: { type: DataTypes.INTEGER, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM("pending", "accepted", "declined"), defaultValue: "pending" }
}, {
  timestamps: true
});

module.exports = Invite;
