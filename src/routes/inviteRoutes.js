const express = require("express");
const { inviteUser } = require("../controllers/inviteController");

const router = express.Router();

router.post("/", inviteUser);

module.exports = router;
